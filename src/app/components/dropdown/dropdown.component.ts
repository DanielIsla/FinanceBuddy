import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common'; // 👈 Importa CommonModule

//TODO Crear documentacion hover
@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input({required: true}) options: { label: string; image: string }[] = [];
  @Input({required: true}) placeholder: string = 'Selecciona una opción';
  @Input() backgroundColor: string = "#1e1e1e";
  @Input() dropdownLabel: string = '';
  @Input() dropdownTip: string = '';

  @Output() selected = new EventEmitter<{ label: string; image: string }>();

  isOpen = false;
  selectedOption: { label: string; image: string } | null = null;

  // Alternar apertura/cierre del dropdown
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  // Métoodo para abrir el dropdown manualmente
  openDropdown() {
    this.isOpen = true;
  }

  // Métoodo para cerrar el dropdown manualmente
  closeDropdown() {
    this.isOpen = false;
  }

  // Seleccionar una opción
  selectOption(option: { label: string; image: string }) {
    this.selectedOption = option;
    this.isOpen = false;
    this.selected.emit(option);
  }
}
