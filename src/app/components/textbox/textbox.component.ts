import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

//--- COMPONENT DESCRIPTION ---
/**
 * @description
 * Textbox component, with graphical validation built-in and a customizable tittle in the top left corner
 ** Example: <app-textbox [value]="value" [fieldtype]="'name|surname|email|phone|text|number|iban'" [isrequired]="true|false" [inputlabel]="'label'" [maxlength]="number" (validitychange)="isValidVariable = $event"></app-textbox>
 */

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
  @Input({required: true}) value: string = '';

  //Field type, that will be used to see what validation to apply (Email, Name, Phone, etc). If not specified, fiel will be valid if it's not empty (if marked as required)
  @Input() fieldtype: string = '';

  //If the field is required
  @Input({required: true}) isrequired: boolean = false;

  //Label for the input, that will be displayed on top
  @Input({required: true}) inputlabel: string = 'Input Field';

  //Max fiel length
  @Input({required: true}) maxlength: number = 0;

  //Force the textbox validation, useful to show error when the user leaves the input empty and continues to submit
  //@Input() forceChecks: boolean = false;

  //--- OUTPUTS TO PARENT ---
  //Emits the validity of the field
  @Output() validitychange = new EventEmitter<boolean>();

  //Emits the value of the field, back to the parent on the same field (Banana Box)
  @Output() valueChange = new EventEmitter<string>();

  public isValid: boolean | undefined;
  public currentTip: string = '';

  constructor() {
  }

  ngOnInit() {
    // We initialize the validity and tip variables
    this.currentTip = this.getInitialTip(this.fieldtype); // Initial validation if value is present
    if (this.value.length > 0) {
      this.validateValue();
    }
  }

  //Public method to force validation from the parent, for example when the form is submitted
  //That way user can see the errors that prevent the form from being submitted
  public forceValidation() {
    this.validateValue();
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
      case 'number':
        this.validateNumber(this.value);
        break;
      case 'iban':
        this.validateIban(this.value);
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
    } // If all validations are ok

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

    const pattern = /^(?!.* {2})[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;
    if (!pattern.test(surname)) {
      this.currentTip = 'Introduzca solo letras';
      this.isValid = false;
      return;
    } // If all validations are ok

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
    }

    // If it contains spaces
    if (/\s/.test(email)) {
      this.currentTip = 'No introduzca espacios';
      this.isValid = false;
      return;
    }

    // Basic email validation pattern
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email)) {
      this.currentTip = 'Formato de correo inválido';
      this.isValid = false;
      return;
    }

    // If it passes all validations
    this.currentTip = 'Ok';
    this.isValid = true;
  }

  validateIban(iban: string) {
    //IBAN validation pattern
    const pattern = /^[a-zA-Z]{2}[0-9]{2}\s?[a-zA-Z0-9]{4}\s?[a-zA-Z0-9]{4}\s?[a-zA-Z0-9]{1,30}$/;
    if (!pattern.test(iban)) {
      this.currentTip = 'Formato de IBAN inválido';
      this.isValid = false;
    } else {
      this.currentTip = 'Ok';
      this.isValid = true;
    }
  }

  private validateNumber(number: string) {
    //If is not a number, we show the tooltip and set validation to false
    if (isNaN(parseFloat(number))) {
      this.currentTip = 'Introduzca únicamente números';
      this.isValid = false;
    } else {
      this.currentTip = 'Ok';
      this.isValid = true;
    }
  }

  /** Helper function to get the correct initial tip based on the field type. */
  private getInitialTip(type: string): string {
    switch (type) {
      case 'name':
        return 'Introduzca solo el nombre';
      case 'surname':
        return 'Introduzca sus apellidos';
      case 'email':
        return 'Correo personal, opcional';
      case 'phone':
        return 'Telefono de su amigo, con prefijo';
      case 'number':
        return 'Introduzca el valor'
      case 'iban':
        return 'Introduzca su IBAN'
      default:
        return '';
    }
  }
}
