import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { CalendarselectorComponent } from '../../components/calendarselector/calendarselector.component';
import { SwitchDataComponent } from '../../components/switch-data/switch-data.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonContent, CalendarselectorComponent, SwitchDataComponent],
})
export class Tab2Page {
  constructor() {}

  @ViewChild('calendarselector') popup!: CalendarselectorComponent;

  abrirPopup() {
    this.popup.abrirPopup();
  }
}
