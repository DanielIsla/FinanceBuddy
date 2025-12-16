import {Component, Input, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

//--- COMPONENT DESCRIPTION ---
/**
 * @description
 * PUT OUTSIDE PAGE CONTAINER TO AVOID EXTRA PADDING
 * Common header component for multiple pages, with customizable page tittle and route when pressing back button
 ** Example: <app-page-header [pageTitle]="pageTitle" [customBackMultiplier]="customBackMultiplier"></app-page-header>
 */

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
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
   * Custom route used to navigate when pressin the back button. IT SHOULD BE SPECIFIED
   */
  @Input({required: true}) customNavRoute: string = "";

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private location: Location,
  ) {
  }

  ngOnInit() {
  }

  //TODO ERROR al ir para atrás, no va para atrás
  async goBack() {
    console.log('go back');
    this.location.back();
  }
}
