import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, ModalController, NavController } from '@ionic/angular/standalone';
import { DropdownComponent } from '../components/dropdown/dropdown.component';
import { SelectBankPage } from '../select-bank/select-bank.page';
import { easeBackIn } from 'd3';
import { BankEntity } from '../models/banks';
import { CurrencyOptions } from '../models/currency';
import { FinanceBuddyDatabaseSQLiteService } from '../services/database/finance-buddy-database-sqlite.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.page.html',
  styleUrls: ['./new-account.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, RouterModule, DropdownComponent, SelectBankPage],
})
export class NewAccountPage implements OnInit {

  currencyOptions = CurrencyOptions;
  selectedBank?: BankEntity = undefined;
  selectedCurrency: any = null;
  startingAmount:string = '';

  constructor(private navCtrl: NavController, private modalController: ModalController, private dbService: FinanceBuddyDatabaseSQLiteService ) { }

  ngOnInit() {
  }

  async openBankSelectionModal() {
    try {
      const modal = await this.modalController.create({
        component: SelectBankPage,
      });

      //Show the modal
      await modal.present();
      const { data, role } = await modal.onDidDismiss();

      console.log('Data:', data);

      this.selectedBank = data;

    } catch (error) {
      console.error('Error when opening the modal selection:', error);
    }
  }

  goBack() {
    this.navCtrl.back();
  }

  onCurrencySelected(option: any) {
    this.selectedCurrency = option;
  }

  restartBankSelection() {
    this.selectedBank = undefined;
  }

  //Store the new account in the database and goes to previous page if its all good
  storeData() {
    console.log(this.selectedBank);
    console.log(this.selectedCurrency);
    console.log(this.startingAmount);

    this.dbService.executeSql('INSERT INTO Accounts (AccountName, AccountType, Currency) VALUES (?, ?, ?)', ['Cuenta Test desde new account', 'Corriente', 'EUR']);

  }
}
