import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavController} from "@ionic/angular";

//-- COMPONENT DESCRIPTION --
/**
 * @description
 * Footer with cancel and accept buttons, that emits events when clicked, with selectable floating effect
 * * Usage: <app-accept-cancel-footer (acceptClick)="acceptClick()" (cancelClick)="cancelClick()"></app-accept-cancel-footer>
 */

@Component({
  selector: 'app-accept-cancel-footer',
  templateUrl: './accept-cancel-footer.component.html',
  styleUrls: ['./accept-cancel-footer.component.scss'],
})
export class AcceptCancelFooterComponent implements OnInit {

  //--- INPUTS FROM PARENT ---
  @Input({required: false}) translucentFloatingFooter: boolean = true;

  //--- OUTPUTS TO PARENT ---
  /**
   * @description
   * Emmited when the user clicks the accept button
   */
  @Output() onAcceptClick = new EventEmitter();
  /**
   * @description
   * Emmited when the user clicks the cancel button
   */
  @Output() onCancelClick = new EventEmitter();

  constructor(private navCtrl: NavController) {
  }

  ngOnInit() {
  }

  acceptClicked() {
    this.onAcceptClick.emit();
  }

  cancelClicked() {
    this.onCancelClick.emit();
  }
}
