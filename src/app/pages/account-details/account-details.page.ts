import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular/standalone';
import { SelectBankPage } from '../select-bank/select-bank.page';
import { CustomizableInputPopupComponent } from 'src/app/components/customizable-input-popup/customizable-input-popup.component';
import { CustomizableDropdownInputPopupComponent } from 'src/app/components/customizable-dropdown-input-popup/customizable-dropdown-input-popup.component';
import { BankEntity } from 'src/app/models/banks';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.page.html',
  styleUrls: ['./account-details.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CustomizableInputPopupComponent,
    CustomizableDropdownInputPopupComponent,
  ],
})
export class AccountDetailsPage implements OnInit {
  @Input() backgroundColor: string = '#000000'; // valor por defecto
  @Input() accountID: number = 0;

  @ViewChild('nameSelector') nameSelector!: ElementRef;
  @ViewChild('IBANSelector') IBANSelector!: ElementRef;

  currentBackground: string = '#000000'; //Color value used for the top
  currentColor: string = '#000000'; //Color value used for the top text

  changesPending: boolean = false;

  nameChangePopupOpen: boolean = false;
  IBANChangePopupOpen: boolean = false;
  CurrencyChangePopupOpen: boolean = false;

  bank: BankEntity = {
    bankName: 'Revolut',
    shortName: 'Revolut',
    corporateColorHex: '#1e1e1e',
    corporateColorHexSecondary: '#FFFFFF',
    bankType: 'Banco Relevante',
    code: 'revolut',
  };
  name: string = 'Sin nombre definido';
  IBAN: string = 'Sin IBAN definido';
  Currency: string = 'Sin moneda definida';
  id: string = '1';

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    this.currentBackground = '#000000';
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.currentBackground = this.backgroundColor;
    }, 50);
  }

  goBack() {
    this.modalController.dismiss(null, 'cancel');
  }

  async changeBank() {
    try {
      const modal = await this.modalController.create({
        component: SelectBankPage,
      });

      //Show the modal
      await modal.present();
      const { data, role } = await modal.onDidDismiss();

      if (data != null) {
        this.bank = data;
        this.changesPending = true;

        //Update the background color
        if (
          this.bank.corporateColorHex != null &&
          this.bank.corporateColorHexSecondary != null
        ) {
          this.currentBackground = this.bank.corporateColorHex;
          this.currentColor = this.bank.corporateColorHexSecondary;
        }
      }
    } catch (error) {
      console.error('Error when opening the modal selection:', error);
    }
  }
  //Open the name change popup
  async openNameChangePopup() {
    this.nameChangePopupOpen = true;
  }
  async openIBANChangePopup() {
    this.IBANChangePopupOpen = true;
  }
  async openCurrencyChangePopup() {
    this.CurrencyChangePopupOpen = true;
  }

  //Close and get the new name
  async closeNameChangePopup(value: string) {
    this.nameChangePopupOpen = false;
    if (value != null) {
      this.name = value;
      this.changesPending = true;
    }
  }
  async closeIBANChangePopup(value: string) {
    this.IBANChangePopupOpen = false;
    if (value != null) {
      this.IBAN = value;
      this.changesPending = true;
    }
  }

  async closeCurrencyChangePopup(value: string) {
    this.CurrencyChangePopupOpen = false;
    if (value != '') {
      this.Currency = value;
      this.changesPending = true;
    }
  }
}
