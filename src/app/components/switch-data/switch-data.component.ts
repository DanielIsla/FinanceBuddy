import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switch-data',
  templateUrl: './switch-data.component.html',
  styleUrls: ['./switch-data.component.scss']
})
export class SwitchDataComponent {

  @Input() textLeft: string = 'Gastado';  // Texto izquierdo
  @Input() textRight: string = 'Ingresado';  // Texto derecho

  @Output() toggle = new EventEmitter<string>();

  // Método para manejar clics en las opciones, previniendo el cambio de estado
  onOptionClick(event: MouseEvent, option: string) 
  {
    // Prevenir que el clic en las opciones afecte el cambio del checkbox
    event.stopPropagation();

    this.toggle.emit(option);
    
    // Opcional: Puedes emitir un valor si deseas manejar algo relacionado con la opción
    console.log(`Opción seleccionada: ${option}`);
  }
}