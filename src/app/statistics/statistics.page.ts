import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class StatisticsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  pageNumber: number = 1;

  ngOnInit() {
  }

  pageChangeSpent()
  {
    this.pageNumber = 1;
  }

  pageChangeIncome()
  {
    this.pageNumber = 2;
  }

  goBack() {
    this.navCtrl.back();
  }
}
