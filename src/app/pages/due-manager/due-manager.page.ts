import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar } from '@ionic/angular/standalone';
import { CalendarselectorComponent } from '../../components/calendarselector/calendarselector.component';

@Component({
  selector: 'app-due-manager',
  templateUrl: './due-manager.page.html',
  styleUrls: ['./due-manager.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonContent,
    CommonModule,
    FormsModule,
    CalendarselectorComponent,
    IonToolbar,
  ],
})
export class DueManagerPage implements OnInit {
  @ViewChild('calendarselector') popup!: CalendarselectorComponent;

  constructor() {}

  ngOnInit() {}

  abrirPopup() {
    this.popup.abrirPopup();
  }
}
