import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // If using routing
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, CommonModule, RouterModule],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  selectedTab: string = 'tab1'; // Default tab

  constructor(private router: Router) {
    addIcons({ triangle, ellipse, square });
  }

  switchTab(tabName: string) {
    this.selectedTab = tabName;
    // Here you would navigate to the appropriate page
    // 1. Using Angular Router (Recommended):
    switch (tabName) {
      case 'inicio':
        this.router.navigate(['/inicio']); // Replace with your route
        break;
      case 'historial':
        this.router.navigate(['/tab1']); // Replace with your route
        break;
      case 'cuentas':
        this.router.navigate(['/cuentas']); // Replace with your route
        break;
      case 'mas':
        this.router.navigate(['/mas']); // Replace with your route
        break;
    }

    // 2. Without Routing (Less common):
    // You'd show/hide components based on the selectedTab
  }

  openMore() {
    // Handle the "More" button click (e.g., open a modal)
    console.log('More clicked');
  }
}
