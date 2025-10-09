import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController, Platform } from '@ionic/angular';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Contacts, ContactPayload } from '@capacitor-community/contacts';
import { options } from 'ionicons/icons';

@Component({
  selector: 'app-friends-contacts',
  templateUrl: './friends-contacts.page.html',
  styleUrls: ['./friends-contacts.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FriendsContactsPage implements OnInit {

  contacts: any[] = [];

  loading: boolean = true;
  errorMessage: string = '';

  constructor(private navCtrl: NavController, private platform: Platform) { }

  async ngOnInit() {
    // Solo disponible en dispositivos móviles
    if (!this.platform.is('capacitor')) {
      this.errorMessage = 'Solo disponible en dispositivos móviles.';
      this.loading = false;
      return;
    }

    try {
      // Ask for contact access permision
      const perm = await Contacts.requestPermissions();
      const granted = perm.contacts === 'granted';

      // Check if permission was granted
      if (!granted) {
        this.errorMessage = 'Permiso denegado por el usuario.';
        this.loading = false;
        return;
      }

      //If it was, we get the user contacts
      const { contacts } = await Contacts.getContacts({
        projection: { name: true, phones: true, emails: true },
      });

      //Mapping data
      this.contacts = (contacts || []).map(c => {
        const firstName = c.name?.given ?? '';
        const lastName = c.name?.family ?? '';
        return {
          displayName: `${firstName} ${lastName}`.trim(), // <-- aquí generamos displayName
          phone: c.phones?.[0]?.number ?? '',
          email: c.emails?.[0]?.address ?? ''
        };
      });
    }

    catch (err) {
      console.error(err);
      this.errorMessage = 'Error al acceder a los contactos.';
      this.loading = false;
    }
  }

  async goBack() {
    this.navCtrl.back();
    await Haptics.impact({ style: ImpactStyle.Light });
  }
}
