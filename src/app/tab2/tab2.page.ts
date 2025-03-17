import { Component, ViewChild} from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CalendarselectorComponent } from "../components/calendarselector/calendarselector.component";
import { SwitchDataComponent } from '../components/switch-data/switch-data.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, CalendarselectorComponent, SwitchDataComponent]
})
export class Tab2Page {

  constructor() {}

  @ViewChild('calendarselector') popup!: CalendarselectorComponent;

  abrirPopup() {
    this.popup.abrirPopup();
  }

}
