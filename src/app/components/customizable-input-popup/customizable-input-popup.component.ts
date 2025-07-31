import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ModalController} from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-customizable-input-popup',
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './customizable-input-popup.component.html',
  styleUrls: ['./customizable-input-popup.component.scss'],
})
//Popup with customizable title and data type via input. 
export class CustomizableInputPopupComponent implements AfterViewInit {
  @ViewChild('popupContainer') popupContainer!: ElementRef;


  @Input() title: string = 'Popup';
  @Input() inputType: string = 'number';

  @Input() visible: boolean = false;

  @Output() confirm = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<void>();

  inputValue: string = '';

  ngAfterViewInit() {
    // aquí puedes hacer cosas con popupContainer si lo necesitas
  }

  onConfirm() {
    this.confirm.emit(this.inputValue);
    /**
     * Method to handle the cancellation of the popup action.
     * Emits the cancel event and resets the input value and visibility state.
     */
    this.cancel.emit();
    
    // Reset the input value
    this.inputValue = '';
    
    // Hide the popup
    this.visible = false;

  }
  onCancel() {
    this.cancel.emit();
    this.inputValue = '';
    this.visible = false;
  }
}

