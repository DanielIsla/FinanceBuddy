import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController, Platform } from '@ionic/angular';
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
}

@Component({
  selector: 'app-friends-contacts',
  templateUrl: './friends-contacts.page.html',
  styleUrls: ['./friends-contacts.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class FriendsContactsPage implements OnInit {
  permission: any;

  // List of contacts, with an interface that aleady has all the posibilities
  // Initialize with one mock contact for web development and styling.
  // This will be overwritten by real contacts on a mobile device.
  contacts: SelectableContact[] = [];
  errorMessage: string = '';

  constructor(
    private navCtrl: NavController,
    private platform: Platform,
    private dbService: FinanceBuddyDatabaseSQLiteService
  ) {}

  ngOnInit() {
    this.getContacts();
  }

  async getContacts() {
    try {
      const permission = await Contacts.requestPermissions();
      this.permission = permission;

      // If permissions are not granted, show an error message
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

      //We set the contacts variable to what we just got from the phone
      this.contacts = result.contacts.map((contact) => ({
        ...contact,
        checked: false,
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
    this.goBack();
  }

  async goBack() {
    this.navCtrl.back();
    console.log(this.contacts);
    this.contacts = [];
    await Haptics.impact({ style: ImpactStyle.Light });
  }
}
