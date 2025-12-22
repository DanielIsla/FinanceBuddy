import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';
import {IonContent} from '@ionic/angular/standalone';
import {
  FinanceBuddyDatabaseSQLiteService,
  Friend,
} from 'src/app/services/database/finance-buddy-database-sqlite.service';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';
import {Haptics, ImpactStyle} from '@capacitor/haptics';
import {PageHeaderComponent} from "../../components/page-header/page-header.component";
import {
  NewRegisterPageFooterComponent
} from "../../components/footers/new-register-page-footer/new-register-page-footer.component";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, PageHeaderComponent, NewRegisterPageFooterComponent],
})
export class FriendsPage {
  friendList: Friend[] = [];
  pageNumber: number = 1;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private dbService: FinanceBuddyDatabaseSQLiteService
  ) {
  }

  //Load friends list on page init
  ngOnInit() {
    this.loadFriends();
  }

  //Load friends list on page enter, perfect to reload when comming back or directly from other child page
  ionViewWillEnter() {
    this.loadFriends();
  }

  async loadFriends() {
    try {
      const result = await this.dbService.getFriends();
      if (result != null) {
        this.friendList = result;
      }
    } catch (error) {
      console.error('Error loading friends:', error);
      this.friendList = []; // Ensure list is empty on error
    }
  }

  nuevoAmigo() {
    this.router.navigate(['/new-friend']);
  }

  async goBack() {
    this.navCtrl.back();

    await Haptics.impact({style: ImpactStyle.Light});
  }
}
