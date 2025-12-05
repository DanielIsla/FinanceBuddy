import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class SearchBarComponent implements OnInit {
  //--- INPUTS FROM PARENT ---
  //The textbox value itself
  @Input() value: string = '';

  //Emits the value of the field, back to the parent on the same field (Banana Box)
  @Output() valueChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}
}
