import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, ModalController } from '@ionic/angular/standalone';
import { bankEntities, BankEntity } from '../../models/banks';

@Component({
  selector: 'app-select-bank',
  templateUrl: './select-bank.page.html',
  styleUrls: ['./select-bank.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule],
})
export class SelectBankPage implements OnInit {
  banks: BankEntity[] = bankEntities;
  searchTerm: string = '';

  //Cash entity, separate from the bank entities
  cashEntity: BankEntity = {
    bankName: 'Efectivo',
    shortName: 'Efectivo',
    corporateColorHex: '#1e1e1e',
    corporateColorHexSecondary: '#FFFFFF',
    bankType: 'Banco Relevante',
    code: 'cash',
  };

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  selectBank(bank: BankEntity) {
    this.modalController.dismiss(bank, 'selected');
  }

  goBack() {
    this.modalController.dismiss(null, 'cancel');
  }
}
