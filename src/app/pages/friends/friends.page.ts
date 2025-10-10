import { Component, OnInit, ViewChild  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { PopupComponent } from '../../components/addfriendpopup/addfriendpopup.component';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
  standalone: true,
  imports: [PopupComponent,IonContent],
})
export class FriendsPage implements OnInit 
{
  constructor(private navCtrl: NavController, private router: Router) { }

  pageNumber: number = 1;

  ngOnInit() 
  {
    
  }

  @ViewChild(PopupComponent) popup!: PopupComponent;

  pageChangeFriends()
  {
    this.pageNumber = 1;
  }
  pageChangeRecommended()
  {
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
