import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';
import { Router } from '@angular/router'; // If using routing
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonContent, RouterModule],
})
export class Tab3Page {
  constructor(private router: Router) {}
}
