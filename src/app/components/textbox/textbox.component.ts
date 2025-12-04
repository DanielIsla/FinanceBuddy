import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class TextboxComponent implements OnInit {
  //--- INPUTS FROM PARENT ---
  //The textbox value itself
  @Input() value: string = '';

  //Field type, that will be used to see what validation to apply (Email, Name, Phone, etc)
  @Input() fieldtype: string = 'text';

  //If the field is required
  @Input() isrequired: boolean = false;

  //Label for the input, that will be displayed on top
  @Input() inputlabel: string = 'Input Field';

  //Max fiel length
  @Input() maxlength: number = 0;

  //--- OUTPUTS TO PARENT ---
  //Emits the validity of the field
  @Output() validitychange = new EventEmitter<boolean>();

  //Emits the value of the field
  @Output() valueChange = new EventEmitter<string>();

  public isValid: boolean | undefined;
  public currentTip: string = '';

  constructor() {}
  ngOnInit() {
    // We initialize the validity and tip variables
    this.currentTip = this.getInitialTip(this.fieldtype); // Initial validation if value is present
    if (this.value.length > 0) {
      this.validateValue();
    }
  }

  // --- EVENT HANDLERS ---
  // If the parent component updates the value, this method is called
  onInputChange(event: any): void {
    const newValue = event.target.value;
    this.value = newValue;
    this.valueChange.emit(newValue);

    // Live validate is the value is false
    if (this.isValid === false) {
      this.validateValue();
    }
  }

  //On blur event, that triggers the validation when the user leaves the field
  onInputBlur(): void {
    this.validateValue();
    this.validitychange.emit(this.isValid === true);
  }

  // --- CORE VALIDATION DISPATCHER ---
  // Validates the data based on field type and required status
  validateValue(): void {
    // Checks if the field is required
    if (this.isrequired && !this.value.trim()) {
      this.currentTip = 'Se debe rellenar el campo';
      this.isValid = false;
      this.validitychange.emit(false);
      return;
    }

    // Based on the field type, calls the validation method needed
    switch (this.fieldtype) {
      case 'name':
        this.validateName(this.value);
        break;
      case 'surname':
        this.validateSurname(this.value);
        break;
      case 'phone':
        this.validatePhone(this.value);
        break;
      case 'email':
        this.validateEmail(this.value);
        break;
      default:
        // If no specific validation, assume valid if not empty
        this.isValid = true;
        this.currentTip = this.getInitialTip(this.fieldtype);
        break;
    }
    // Ensure the output event is emitted with the final status after validation runs
    this.validitychange.emit(this.isValid === true);
  }

  // --- VALIDATION METHODS ---
  // Called by the dispatcher to validate the data
  validateName(name: string) {
    // If its empty
    if (!name.trim()) {
      this.currentTip = 'Se debe rellenar el campo';
      this.isValid = false;
      return;
    } // If contains spaces

    if (/\s/.test(name)) {
      this.currentTip = 'No introduzca espacios';
      this.isValid = false;
      return;
    } // If contains special characters or numbers

    const pattern = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/;
    if (!pattern.test(name)) {
      this.currentTip = 'Introduzca solo letras';
      this.isValid = false;
      return;
    } // Si pasa todas las validaciones

    this.currentTip = 'Ok';
    this.isValid = true;
  }

  validateSurname(surname: string) {
    // If its empty
    if (!surname.trim()) {
      this.currentTip = 'Se debe rellenar el campo';
      this.isValid = false;
      return;
    }

    //TODO Añadir validación de espacios, pero solo para 1
    /*
    // If contains spaces
    if (/\s/.test(surname)) {
      this.currentTip = 'No introduzca espacios';
      this.isValid = false;
      return;
    } // If contains special characters or numbers
     */

    const pattern = /^(?!.* {2})[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;
    if (!pattern.test(surname)) {
      this.currentTip = 'Introduzca solo letras';
      this.isValid = false;
      return;
    } // Si pasa todas las validaciones

    this.currentTip = 'Ok';
    this.isValid = true;
  }

  validatePhone(phone: string) {
    // If its empty
    if (!phone.trim()) {
      this.currentTip = 'Se debe rellenar el campo';
      this.isValid = false;
      return;
    } // If contains spaces

    if (/\s/.test(phone)) {
      this.currentTip = 'No introduzca espacios';
      this.isValid = false;
      return;
    } // Only numbers and the + at the beginning

    const pattern = /^\+?\d+$/;
    if (!pattern.test(phone)) {
      this.currentTip = 'Solo se permiten números y el prefijo +';
      this.isValid = false;
      return;
    } // If it doesn't start with "+"

    if (!phone.startsWith('+')) {
      this.currentTip = 'Incluya el prefijo (por ejemplo, +34)';
      this.isValid = false;
      return;
    } // If the length is not reasonable

    if (phone.length < 8 || phone.length > 15) {
      this.currentTip = 'Número de teléfono no válido';
      this.isValid = false;
      return;
    } // If it passes all validations

    this.currentTip = 'Ok';
    this.isValid = true;
  }

  validateEmail(email: string) {
    // If it's empty → its optional, we wont mark it as error of success either
    if (!email.trim()) {
      this.currentTip = 'Correo personal, opcional';
      this.isValid = undefined;
      return;
    } // If it contains spaces

    if (/\s/.test(email)) {
      this.currentTip = 'No introduzca espacios';
      this.isValid = false;
      return;
    } // Basic email validation pattern

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email)) {
      this.currentTip = 'Formato de correo inválido';
      this.isValid = false;
      return;
    } // If it passes all validations

    this.currentTip = 'Ok';
    this.isValid = true;
  } //Validates the email format

  checkValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  } //Validates the phone number format

  checkValidPhone(phone: string): boolean {
    const phoneRegex = /^\+34\d{9}$/;
    return phoneRegex.test(phone);
  }

  /** Helper function to get the correct initial tip based on the field type. */
  private getInitialTip(type: string): string {
    switch (type) {
      case 'name': // English type
        return 'Introduzca solo el nombre';
      case 'surname':
        return 'Introduzca sus apellidos';
      case 'email': // English type
        return 'Correo personal, opcional';
      case 'phone': // English type
        return 'Telefono de su amigo, con prefijo';
      default:
        return '';
    }
  }
}
