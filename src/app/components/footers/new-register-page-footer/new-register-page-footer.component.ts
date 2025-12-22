import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgIf} from "@angular/common";

// -- COMPONENT DESCRIPTION --
/**
 *@description
 * Footer with single option in the center to create a new register (new friend, account etc.)
 * * Usage: <app-new-register-page-footer [buttonText]="'Nuevo amigo'" [buttonIcon]="'assets/images/icon.format'" (actionButton)="desiredActionEvent()"></app-new-register-page-footer>
 */

@Component({
  selector: 'app-new-register-page-footer',
  templateUrl: './new-register-page-footer.component.html',
  styleUrls: ['./new-register-page-footer.component.scss'],
  imports: [
    NgIf
  ]
})
export class NewRegisterPageFooterComponent implements OnInit {

  //--- INPUTS FROM PARENT ---
  /**
   * @description
   * Text to show in the button, required
   */
  @Input({required: true}) buttonText: string = "";
  /**
   * @description
   * Icon to show in the button, optional
   */
  @Input({required: false}) buttonIcon: string = "";

  //--- OUTPUTS TO PARENT ---
  /**
   * @description
   * Emitted when the user clicks the button
   */
  @Output() actionButton = new EventEmitter();

  constructor() {
  }

  actionButtonClicked() {
    this.actionButton.emit();
  }

  ngOnInit() {
  }

}
