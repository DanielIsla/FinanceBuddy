import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { IonContent, ModalController } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { FinanceBuddyDatabaseSQLiteService } from '../../services/database/finance-buddy-database-sqlite.service';
import { AccountItemComponent } from '../../components/account-item/account-item.component';
import { Account } from '../../services/database/finance-buddy-database-sqlite.service';
import { AccountDetailsPage } from '../account-details/account-details.page';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    RouterModule,
    AccountItemComponent,
  ],
})
export class AccountsPage implements OnInit {
  accounts: Account[] = [];

  constructor(
    private navCtrl: NavController,
    private dbService: FinanceBuddyDatabaseSQLiteService,
    private modalController: ModalController
  ) {}

  async ngOnInit() {
    const result = await this.dbService.getAccounts();
    if (result != null) {
      this.accounts = result;
    }
    console.log(this.accounts);
  }

  async openAccountActionsModal(accountID: number) {
    try {
      const modal = await this.modalController.create({
        component: AccountDetailsPage,
        componentProps: {
          accountID: accountID,
          backgroundColor: '#009933',
        },
      });

      //Show the modal
      await modal.present();
      const { data, role } = await modal.onDidDismiss();

      console.log('Data:', data);
    } catch (error) {
      console.error('Error when opening the modal selection:', error);
    }
  }

  goBack() {
    this.navCtrl.back();
  }
}
