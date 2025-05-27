import { Component, ViewChild} from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';
import { time } from 'ionicons/icons';
import { timeout } from 'd3';
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready();

    await StatusBar.setOverlaysWebView({ overlay: false });
    await StatusBar.setBackgroundColor({ color: '#ffffffff' });
    await StatusBar.setStyle({ style: Style.Dark });
    await StatusBar.show();
  }
}
