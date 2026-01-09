import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {IonContent, ModalController, NavController,} from '@ionic/angular/standalone';
import {SelectBankPage} from '../select-bank/select-bank.page';
import {BankEntity} from '../../models/banks';
import {CurrencyOptions} from '../../models/currency';
import {
  Account,
  FinanceBuddyDatabaseSQLiteService,
} from '../../services/database/finance-buddy-database-sqlite.service';
import {PageHeaderComponent} from "../../components/page-header/page-header.component";
import {
  AcceptCancelFooterComponent
} from "../../components/footers/accept-cancel-footer/accept-cancel-footer.component";
import {TextboxComponent} from "../../components/textbox/textbox.component";
import {DropdownComponent} from "../../components/dropdown/dropdown.component";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.page.html',
  styleUrls: ['./new-account.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    RouterModule,
    PageHeaderComponent,
    AcceptCancelFooterComponent,
    TextboxComponent,
    DropdownComponent,
  ],
})
export class NewAccountPage implements OnInit {
  //New account fields
  currencyOptions = CurrencyOptions;
  selectedBank?: BankEntity = undefined;
  selectedCurrency: any = undefined;
  startingAmount: string = '';
  AccountIBAN: string = '';
  AccountName: string = '';

  //Validation check fields, connected to texbox component internal validation with input - output
  accountNameValid?: boolean = undefined;
  accountIBANValid?: boolean = undefined;
  startingAmountValid?: boolean = undefined;

  constructor(
    private navCtrl: NavController,
    private modalController: ModalController,
    private dbService: FinanceBuddyDatabaseSQLiteService
  ) {
  }

  ngOnInit() {
  }

  async openBankSelectionModal() {
    try {
      const modal = await this.modalController.create({
        component: SelectBankPage,
      });

      //Show the modal
      await modal.present();
      const {data, role} = await modal.onDidDismiss();

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
    if (this.selectedBank != undefined) {
      const newAccount: Omit<Account, 'ID'> = {
        AccountName: this.AccountName,
        BankCode: this.selectedBank.code,
        IBAN: this.AccountIBAN,
        Currency: this.selectedCurrency,
        Balance: parseFloat(this.startingAmount),
      }

      //Create the account on the database if all fields are valid
      this.dbService.createAccount(newAccount).then(r => {
      });

      //Go back to the previus account list page, where the new account will be displayed
      this.goBack();
    } else {
      console.log('No bank selected');
    }
  }
}
