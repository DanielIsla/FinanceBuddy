import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { IonContent } from '@ionic/angular/standalone';
import { TextboxComponent } from 'src/app/components/textbox/textbox.component';
import {
  FinanceBuddyDatabaseSQLiteService,
  Friend,
} from 'src/app/services/database/finance-buddy-database-sqlite.service';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

@Component({
  selector: 'app-new-friend',
  templateUrl: './new-friend.page.html',
  styleUrls: ['./new-friend.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, TextboxComponent],
})
export class NewFriendPage implements OnInit {
  constructor(
    private navCtrl: NavController,
    private dbService: FinanceBuddyDatabaseSQLiteService
  ) {}

  //Name and both surnames, separate for better user understanding
  name: string = '';
  surname: string = '';
  surname2: string = '';

  //Friend information, with name and surnames on same variable for storing it on the database
  friendFullName: string = '';
  friendEmail: string = '';
  friendPhone: string = '+34';

  //Is data valid? We check every time the user writes something, to live update the error messages
  isValidName?: boolean;
  isValidSurname?: boolean;
  isValidSurname2?: boolean;
  isValidPhone?: boolean;
  isValidEmail?: boolean;

  //Tip variable messages
  nameTip: string = 'Introduzca solo el nombre';
  surnameTip: string = 'Primer apellido';
  surname2Tip: string = 'Segundo apellido';
  emailTip: string = 'Correo personal, opcional';
  phoneTip: string = 'Telefono de su amigo, con prefijo';

  ngOnInit() {}

  async createFriend() {
    await Haptics.impact({ style: ImpactStyle.Heavy });

    //Check if all fields are valid, then proceed to add the new friend to the database
    if (
      this.isValidEmail == true &&
      this.isValidPhone == true &&
      this.isValidName == true &&
      this.isValidSurname == true &&
      this.isValidSurname2 == true
    ) {
      const newFriend: Omit<Friend, 'ID'> = {
        FullName: this.name + ' ' + this.surname + ' ' + this.surname2,
        Email: this.friendEmail,
        Phone: this.friendPhone,
      };
      this.dbService.createFriend(newFriend);
    }

    this.goBack();
  }

  addFromContacts() {
    this.navCtrl.navigateForward('/friends-contacts');
  }

  async goBack() {
    this.isValidName = undefined;
    this.isValidSurname = undefined;
    this.isValidSurname2 = undefined;
    this.isValidPhone = undefined;
    this.isValidEmail = undefined;

    this.navCtrl.back();

    await Haptics.impact({ style: ImpactStyle.Light });
  }
}
