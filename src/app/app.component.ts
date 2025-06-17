import { Component, ViewChild} from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';
import { time } from 'ionicons/icons';
import { timeout } from 'd3';
import { isPlatformServer } from '@angular/common';
import { FinanceBuddyDatabaseSQLiteService } from './services/database/finance-buddy-database-sqlite.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  visible = true;
  overlays  = false;
  constructor(private platform: Platform, private dbService: FinanceBuddyDatabaseSQLiteService) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready();

    await StatusBar.setOverlaysWebView({ overlay: false });
    await StatusBar.setBackgroundColor({ color: '#ffffffff' });
    await StatusBar.setStyle({ style: Style.Dark });
    await StatusBar.show();
  }

  async ngOnInit() {
  await this.dbService.initializeDatabase();
  }
}
