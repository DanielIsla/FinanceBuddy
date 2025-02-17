import { Component, OnInit, ViewChild  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { PopupComponent } from '../components/addfriendpopup/addfriendpopup.component';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
  standalone: true,
  imports: [PopupComponent,IonContent],
})
export class FriendsPage implements OnInit 
{
  constructor() { }

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

  mostrarPopup() {
    this.popup.abrirPopup();
  }
}
