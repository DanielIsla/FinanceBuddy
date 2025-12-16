import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

//-- COMPONENT DESCRIPTION --
/**
 * @description
 * Simple search bar to use anywhere
 * * Usage: <app-search-bar [(value)]="searchBarValue" (valueChange)="yourSearchEvent()"></app-search-bar>
 */

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class SearchBarComponent implements OnInit {
  //--- INPUTS FROM PARENT ---
  /**
   * @description
   * The value of the field itself. Gets updated automatically with bananaBox
   */
  @Input() value: string = '';

  //--- OUTPUTS TO PARENT ---
  /**
   * @description
   * Emits the value of the field, back to the parent. Can be used to run a method in the parent when texbox value changes
   * * Example: <app-search-bar [(value)]="searchBarValue" (valueChange)="yourSearchEvent()"></app-search-bar>
   */
  @Output() valueChange = new EventEmitter<string>();

  //--- EVENT HANDLERS ---

  constructor() {
  }

  //If the parent component updates the value, this method is called
  onInputChange(event: any): void {
    const newValue = event.target.value;
    this.value = newValue;
    this.valueChange.emit(newValue);
  }

  ngOnInit() {
  }
}
