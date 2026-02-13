import {AfterViewInit, Component, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NavController} from '@ionic/angular';
import {IonContent} from '@ionic/angular/standalone';
import {TextboxComponent} from 'src/app/components/textbox/textbox.component';
import {
  FinanceBuddyDatabaseSQLiteService,
  Friend
} from 'src/app/services/database/finance-buddy-database-sqlite.service';
import {Haptics, ImpactStyle} from '@capacitor/haptics';
import {
  AcceptCancelFooterComponent
} from '../../components/footers/accept-cancel-footer/accept-cancel-footer.component';
import {PageHeaderComponent} from '../../components/page-header/page-header.component';
import {ToastComponent} from '../../components/toast/toast.component';

@Component({
  selector: 'app-new-friend',
  templateUrl: './new-friend.page.html',
  styleUrls: ['./new-friend.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    TextboxComponent,
    AcceptCancelFooterComponent,
    PageHeaderComponent,
    ToastComponent
  ]
})
export class NewFriendPage implements AfterViewInit {
  //Get textbox reference to force validation from the parent component later if neccesary
  @ViewChildren(TextboxComponent)
  textboxes!: QueryList<TextboxComponent>;

  @ViewChild(ToastComponent) toast!: ToastComponent;

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

  constructor(
    private navCtrl: NavController,
    private dbService: FinanceBuddyDatabaseSQLiteService
  ) {
  }

  ngAfterViewInit() {
    this.toast.show('Test del toast', 'warning', 3000, '90px', true);
  }

  async createFriend() {
    await Haptics.impact({style: ImpactStyle.Heavy});

    //Check if all fields are valid, then proceed to add the new friend to the database
    if (
      this.isValidName == true &&
      this.isValidSurname == true &&
      this.isValidPhone == true &&
      this.isValidEmail !== false
    ) {
      const newFriend: Omit<Friend, 'ID'> = {
        FullName: this.name + ' ' + this.surname,
        Phone: this.phone,
        Email: this.email
      };

      //Add the new friend to the database
      const result = await this.dbService.createFriend(newFriend);

      //When everything is done, we go back to the "friends" list page
      if (result) {
        this.toast.show('Amigo creado correctamente', 'success', 3000, '90px', true);
        setTimeout(async () => {
          await this.goBack();
        }, 2000);
      } else {
        this.toast.show('Error al crear amigo', 'error', 3000, '90px', true);
      }
    } else {
      //Here, something is wrong, so we force the texboxes to show their errors
      this.textboxes.forEach((textbox) => textbox.forceValidation());
    }
  }

  addFromContacts() {
    this.navCtrl.navigateForward('/friends-contacts');
  }

  async goBack() {
    //Reset form validation states
    this.isValidName = undefined;
    this.isValidSurname = undefined;
    this.isValidPhone = undefined;
    this.isValidEmail = undefined;

    //Go back to the previous page
    this.navCtrl.back();

    //Haptic feedback
    await Haptics.impact({style: ImpactStyle.Light});
  }
}
