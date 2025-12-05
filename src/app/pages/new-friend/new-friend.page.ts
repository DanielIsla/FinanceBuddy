import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
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

  //Get textbox reference to force validation from the parent component later if neccesary
  @ViewChildren(TextboxComponent)
  textboxes!: QueryList<TextboxComponent>;

  //Form data
  name: string = '';
  surname: string = '';
  phone: string = '';
  email: string = '';

  //Form validation states
  isValidName: boolean | undefined;
  isValidSurname: boolean | undefined;
  isValidPhone: boolean | undefined;
  isValidEmail: boolean | undefined;

  ngOnInit() {}

  async createFriend() {
    await Haptics.impact({ style: ImpactStyle.Heavy });

    //Check if all fields are valid, then proceed to add the new friend to the database
    if (
      this.isValidName == true &&
      this.isValidSurname == true &&
      this.isValidPhone == true
    ) {
      const newFriend: Omit<Friend, 'ID'> = {
        FullName: this.name + ' ' + this.surname,
        Phone: this.phone,
        Email: this.email,
      };

      //Add the new friend to the database
      this.dbService.createFriend(newFriend);

      //When everything is done, we go back to the "friends" list page
      this.goBack();
    } else {
      //Here, something is wrong, so we force the texboxes to show their errors
      this.textboxes.forEach((textbox) => textbox.forceValidation());
    }
  }

  addFromContacts() {
    this.navCtrl.navigateForward('/friends-contacts');
  }

  async goBack() {
    this.isValidName = undefined;
    this.isValidSurname = undefined;
    this.isValidPhone = undefined;
    this.isValidEmail = undefined;

    this.navCtrl.back();

    await Haptics.impact({ style: ImpactStyle.Light });
  }
}
