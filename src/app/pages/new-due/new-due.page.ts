import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router'; // If using routing
import { RouterModule } from '@angular/router'; // Import RouterModule
import { FinanceBuddyDatabaseSQLiteService } from 'src/app/services/database/finance-buddy-database-sqlite.service';
import { Friend } from 'src/app/services/database/finance-buddy-database-sqlite.service';
import { Account } from 'src/app/services/database/finance-buddy-database-sqlite.service';

//We extend from friend, that way we can add a checked field
interface SelectableFriend extends Friend {
  checked: boolean;
}

@Component({
  selector: 'app-new-due',
  templateUrl: './new-due.page.html',
  styleUrls: ['./new-due.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, RouterModule],
})
export class NewDuePage implements OnInit {
  constructor(
    private dbService: FinanceBuddyDatabaseSQLiteService,
    private router: Router
  ) {}

  pageNumber: number = 1;
  headerAction: string = 'Selecciona un amigo';
  headerStep: string = 'Paso 1 de 4';
  nextBtnText: string = 'Continuar';

  //Database new due variables
  concept: string = '';
  amount?: number = undefined;
  selectedFriend?: Friend = undefined;
  account?: Account = undefined;

  //Variables to store user friends and accounts from the database
  friends: SelectableFriend[] | null = [];
  accounts: Account[] | null = [];

  ngOnInit() {
    this.changeHeaderTexts();
    this.loadFriendsAccountsDB();
  }

  nextPage() {
    if (this.pageNumber != 4) {
      this.pageNumber = this.pageNumber + 1;
    }

    this.changeHeaderTexts();
  }

  prevPage() {
    if (this.pageNumber != 1) {
      this.pageNumber = this.pageNumber - 1;
    }

    this.changeHeaderTexts();
  }

  changeHeaderTexts() {
    switch (this.pageNumber) {
      case 1: {
        this.headerAction = 'Selecciona un amigo';
        this.headerStep = 'Paso 1 de 4';
        this.nextBtnText = 'Continuar';
        break;
      }
      case 2: {
        this.headerAction = 'Introduce el importe';
        this.headerStep = 'Paso 2 de 4';
        this.nextBtnText = 'Continuar';
        break;
      }

      case 3: {
        this.headerAction = 'Cuenta a añadir';
        this.headerStep = 'Paso 3 de 4';
        this.nextBtnText = 'Continuar';
        break;
      }

      case 4: {
        this.headerAction = 'Resumen de operación';
        this.headerStep = 'Paso 4 de 4';
        this.nextBtnText = 'Finalizar';
        break;
      }

      default: {
        break;
      }
    }
  }

  //Loads friends and account so the user can select them
  async loadFriendsAccountsDB() {
    try {
      const result = await this.dbService.getFriends();
      if (result != null) {
        this.friends = result.map((friend) => ({ ...friend, checked: false }));

        if (this.friends != null) {
          this.friends.forEach((friend) => {
            friend.checked = false;
          });
        }
      }
    } catch (error) {
      console.error('Error loading friends:', error);
      this.friends = []; // Ensure list is empty on error
    }

    try {
      const result = await this.dbService.getAccounts();
      if (result != null) {
        this.accounts = result;
      }
    } catch (error) {
      console.error('Error loading friends:', error);
      this.accounts = []; // Ensure list is empty on error
    }
  }
}
