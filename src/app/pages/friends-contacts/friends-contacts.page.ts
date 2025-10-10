import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController, Platform } from '@ionic/angular';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ContactPayload, Contacts, PermissionStatus, Projection } from '@capacitor-community/contacts';

@Component({
  selector: 'app-friends-contacts',
  templateUrl: './friends-contacts.page.html',
  styleUrls: ['./friends-contacts.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FriendsContactsPage implements OnInit {

  permission: any;

  // List of contacts, with an interface that aleady has all the posibilities
  // Initialize with one mock contact for web development and styling.
  // This will be overwritten by real contacts on a mobile device.
  contacts: ContactPayload[] = [];

  loading: boolean = true;

  errorMessage: string = '';

  constructor(private navCtrl: NavController, private platform: Platform) { }

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
    this.contacts = result.contacts;
  }

  catch (error) {
    console.error("Error requesting permissions:", error);
    this.errorMessage = "Error requesting permissions";
  }
}


  async goBack() {
    this.navCtrl.back();
    console.log(this.contacts);
    await Haptics.impact({ style: ImpactStyle.Light });
  }
}
