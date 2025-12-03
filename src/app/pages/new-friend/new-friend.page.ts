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

  validateName() {
    // If its empty
    if (!this.name.trim()) {
      this.nameTip = 'Se debe rellenar el campo';
      this.isValidName = false;
      return;
    }

    // If contains spaces
    if (/\s/.test(this.name)) {
      this.nameTip = 'No introduzca espacios';
      this.isValidName = false;
      return;
    }

    // If contains special characters or numbers
    const pattern = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/;
    if (!pattern.test(this.name)) {
      this.nameTip = 'Introduzca solo letras';
      this.isValidName = false;
      return;
    }

    // Si pasa todas las validaciones
    this.nameTip = 'Ok';
    this.isValidName = true;
  }

  validateSurname() {
    // If its empty
    if (!this.surname.trim()) {
      this.surnameTip = 'Se debe rellenar el campo';
      this.isValidSurname = false;
      return;
    }

    // If contains spaces
    if (/\s/.test(this.surname)) {
      this.surnameTip = 'No introduzca espacios';
      this.isValidSurname = false;
      return;
    }

    // If contains special characters or numbers
    const pattern = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/;
    if (!pattern.test(this.surname)) {
      this.surnameTip = 'Introduzca solo letras';
      this.isValidSurname = false;
      return;
    }

    // Si pasa todas las validaciones
    this.surnameTip = 'Ok';
    this.isValidSurname = true;
  }

  validateSurname2() {
    // If its empty
    if (!this.surname2.trim()) {
      this.surname2Tip = 'Se debe rellenar el campo';
      this.isValidSurname2 = false;
      return;
    }

    // If contains spaces
    if (/\s/.test(this.surname2)) {
      this.surname2Tip = 'No introduzca espacios';
      this.isValidSurname2 = false;
      return;
    }

    // If contains special characters or numbers
    const pattern = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/;
    if (!pattern.test(this.surname2)) {
      this.surname2Tip = 'Introduzca solo letras';
      this.isValidSurname2 = false;
      return;
    }

    // Si pasa todas las validaciones
    this.surname2Tip = 'Ok';
    this.isValidSurname2 = true;
  }

  validatePhone() {
    // Si está vacío
    if (!this.friendPhone.trim()) {
      this.phoneTip = 'Se debe rellenar el campo';
      this.isValidPhone = false;
      return;
    }

    // Si contiene espacios
    if (/\s/.test(this.friendPhone)) {
      this.phoneTip = 'No introduzca espacios';
      this.isValidPhone = false;
      return;
    }

    // Solo se permiten números y el signo + al principio
    const pattern = /^\+?\d+$/;
    if (!pattern.test(this.friendPhone)) {
      this.phoneTip = 'Solo se permiten números y el prefijo +';
      this.isValidPhone = false;
      return;
    }

    // Si no tiene prefijo "+"
    if (!this.friendPhone.startsWith('+')) {
      this.phoneTip = 'Incluya el prefijo (por ejemplo, +34)';
      this.isValidPhone = false;
      return;
    }

    // Si la longitud no es razonable
    if (this.friendPhone.length < 8 || this.friendPhone.length > 15) {
      this.phoneTip = 'Número de teléfono no válido';
      this.isValidPhone = false;
      return;
    }

    // ✅ Si pasa todas las validaciones
    this.phoneTip = 'Ok';
    this.isValidPhone = true;
  }

  validateEmail() {
    // Si el campo está vacío → es opcional, no marcamos error ni éxito
    if (!this.friendEmail.trim()) {
      this.emailTip = 'Correo personal, opcional';
      this.isValidEmail = undefined;
      return;
    }

    // Si contiene espacios
    if (/\s/.test(this.friendEmail)) {
      this.emailTip = 'No introduzca espacios';
      this.isValidEmail = false;
      return;
    }

    // Patrón básico de validación de email
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(this.friendEmail)) {
      this.emailTip = 'Formato de correo inválido';
      this.isValidEmail = false;
      return;
    }

    // ✅ Si pasa todas las validaciones
    this.emailTip = 'Ok';
    this.isValidEmail = true;
  }

  //Validates the email format
  checkValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  //Validates the phone number format
  checkValidPhone(phone: string): boolean {
    const phoneRegex = /^\+34\d{9}$/;
    return phoneRegex.test(phone);
  }

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
