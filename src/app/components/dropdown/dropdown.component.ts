import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 Importa CommonModule

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() options: { label: string; image: string }[] = [];
  @Input() placeholder: string = 'Selecciona una opción';
  @Output() selected = new EventEmitter<{ label: string; image: string }>();

  isOpen = false;
  selectedOption: { label: string; image: string } | null = null;

  // Alternar apertura/cierre del dropdown
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  // Método para abrir el dropdown manualmente
  openDropdown() {
    this.isOpen = true;
  }

  // Método para cerrar el dropdown manualmente
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
