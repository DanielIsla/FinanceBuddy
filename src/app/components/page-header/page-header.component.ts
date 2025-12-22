import {Component, Input, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {Router} from "@angular/router";
import {Location, NgClass} from "@angular/common";

//--- COMPONENT DESCRIPTION ---
/**
 * @description
 * OUTSIDE page to avoid extra padding <br>
 * Common header component for multiple pages, with customizable page tittle and route when pressing back button
 ** Example: <app-page-header [pageTitle]="pageTitle" [customBackMultiplier]="customBackMultiplier"></app-page-header>
 */

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  imports: [
    NgClass
  ]
})
export class PageHeaderComponent implements OnInit {

  //--- INPUTS FROM PARENT ---
  /**
   * @description
   * The page tittle, that will be displayed in the header middle
   */
  @Input({required: true}) pageTitle: string = '';

  /**
   * @description
   * Custom ammount of back steps, 1 if not specified
   */
  @Input({required: false}) customBackSteps: number = 1;

  /**
   * @description
   * Indicates if the header is over the rest of the page content, so lists item go under it for smoother looks
   */
  @Input({required: false}) translucentFloatingHeader: boolean = true;

  constructor(
    private navCtrl: NavController,
  ) {
  }

  ngOnInit() {
  }

  async goBack() {
    console.log('go back');
    this.navCtrl.back();
  }
}
