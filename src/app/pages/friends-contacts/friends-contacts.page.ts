import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import {
  ContactPayload,
  Contacts,
  PermissionStatus,
  Projection,
} from '@capacitor-community/contacts';
import {
  FinanceBuddyDatabaseSQLiteService,
  Friend,
} from 'src/app/services/database/finance-buddy-database-sqlite.service';

//We extend from the contacts plugin ContactPayload interface, and add a checked field to know what contacs are selected to add
interface SelectableContact extends ContactPayload {
  checked: boolean;
  duplicate: boolean;
}

@Component({
  selector: 'app-friends-contacts',
  templateUrl: './friends-contacts.page.html',
  styleUrls: ['./friends-contacts.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule],
})
export class FriendsContactsPage implements OnInit {
  permission: any;

  // List of contacts, with an interface that aleady has all the posibilities
  // Initialize with one mock contact for web development and styling.
  // This will be overwritten by real contacts on a mobile device.
  contacts: SelectableContact[] = [];
  errorMessage: string = '';

  constructor(
    private router: Router,
    private platform: Platform,
    private dbService: FinanceBuddyDatabaseSQLiteService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getContacts();
  }

  //Gets the friends from the database to avoid duplicates
  async getFriends(): Promise<Friend[] | null> {
    try {
      const result = await this.dbService.getFriends();

      //If the result is not null, return the values
      if (result != null) {
        return result.values;
      }

      // If the result is null, log an error and return null.
      console.error('Error getting friends:', result);
      return null;
    } catch (error) {
      console.error('Error getting friends:', error);
      return null;
    }
  }

  // Gets the contacts from the phone agenda
  async getContacts() {
    try {
      // First, get the existing friends from the database to check from duplicates later
      const friends = await this.getFriends();

      const permission = await Contacts.requestPermissions();
      this.permission = permission;

      if (permission?.contacts !== 'granted') {
        this.errorMessage = 'Permisos no concedidos';
        return;
      }

      // If permissions are granted, get the contacts
      const result = await Contacts.getContacts({
        projection: {
          name: true,
          phones: true,
          emails: true,
          image: true,
        },
      });

      // Map phone contacts to SelectableContact and check for duplicates.
      this.contacts = result.contacts.map((contact) => ({
        ...contact,
        checked: false,

        // A contact is a duplicate if a friend with the same phone number or email already exists.
        duplicate: friends
          ? friends.some(
              (friend) =>
                (friend.Phone &&
                  contact.phones &&
                  contact.phones.some((p) => p.number === friend.Phone)) ||
                (friend.Email &&
                  contact.emails &&
                  contact.emails.some((e) => e.address === friend.Email))
            )
          : false,
      }));
    } catch (error) {
      console.error('Error requesting permissions:', error);
      this.errorMessage = 'Error requesting permissions';
    }
  }

  async createFriends() {
    const selectedContacts = this.contacts.filter((contact) => contact.checked);

    for (const contact of selectedContacts) {
      // Extracting the full name from the contact object, if available.
      const fullName = contact.name?.display || '';
      // Extracting the first email, if available.
      const email =
        contact.emails && contact.emails.length > 0
          ? contact.emails[0].address
          : null;
      // Extracting the first phone number, if available.
      const phone =
        contact.phones && contact.phones.length > 0
          ? contact.phones[0].number
          : null;

      const newFriend: Omit<Friend, 'ID'> = {
        FullName: fullName,
        Email: email,
        Phone: phone,
      };
      await this.dbService.createFriend(newFriend);
    }
    // After creating the friends, navigate back.
    this.goBackTwice();
  }

  async goBack() {
    this.location.back();
    await Haptics.impact({ style: ImpactStyle.Light });
  }

  async goBackTwice() {
    //Go back 2 pages, going to friends. Jump manual friend creation page
    this.location.historyGo(-2);

    // Clean up the contacts list after navigating away.
    this.contacts = [];
    await Haptics.impact({ style: ImpactStyle.Light });
  }
}
