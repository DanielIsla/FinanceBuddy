import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonContent } from '@ionic/angular/standalone';
import {
  FinanceBuddyDatabaseSQLiteService,
  Friend,
} from 'src/app/services/database/finance-buddy-database-sqlite.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule],
})
export class FriendsPage {
  constructor(
    private navCtrl: NavController,
    private router: Router,
    private dbService: FinanceBuddyDatabaseSQLiteService
  ) {}

  friendList: Friend[] = [];
  pageNumber: number = 1;

  ngOnInit() {
    this.loadFriends();
  }

  async loadFriends() {
    try {
      const result = await this.dbService.getFriends();
      if (result && result.values) {
        this.friendList = result.values;
      }
    } catch (error) {
      console.error('Error loading friends:', error);
      this.friendList = []; // Ensure list is empty on error
    }
  }

  pageChangeFriends() {
    this.pageNumber = 1;
  }
  pageChangeRecommended() {
    this.pageNumber = 2;
  }

  nuevoAmigo() {
    this.router.navigate(['/new-friend']);
  }

  async goBack() {
    this.navCtrl.back();

    await Haptics.impact({ style: ImpactStyle.Light });
  }
}
