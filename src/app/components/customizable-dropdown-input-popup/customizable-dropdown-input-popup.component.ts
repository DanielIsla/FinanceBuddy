import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ModalController} from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { CurrencyOptions } from 'src/app/models/currency';

@Component({
  selector: 'app-customizable-dropdown-input-popup',
  imports: [IonicModule, CommonModule, FormsModule, DropdownComponent],
  templateUrl: './customizable-dropdown-input-popup.component.html',
  styleUrls: ['./customizable-dropdown-input-popup.component.scss'],
})
//Popup with customizable title and data type via input. 
export class CustomizableDropdownInputPopupComponent implements AfterViewInit {
  @ViewChild('popupContainer') popupContainer!: ElementRef;


  @Input() title: string = 'Popup';
  @Input() inputType: string = 'number';

  @Input() visible: boolean = false;

  @Output() confirm = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<void>();

  currencyOptions = CurrencyOptions;
  selectedCurrency:string = "";

  ngAfterViewInit() {
    // aquí puedes hacer cosas con popupContainer si lo necesitas
  }

  onCurrencySelected(currency: any) {
    this.selectedCurrency = currency.label;
  }

  onConfirm() {
    this.confirm.emit(this.selectedCurrency);
    /**
     * Method to handle the cancellation of the popup action.
     * Emits the cancel event and resets the input value and visibility state.
     */
    this.cancel.emit();
    
    // Reset the input value
    this.selectedCurrency = '';
    
    // Hide the popup
    this.visible = false;

  }


  onCancel() {
    this.cancel.emit();
    this.selectedCurrency = '';
    this.visible = false;
  }
}

