import { Component } from '@angular/core';

@Component({
  selector: 'add-friend',
  templateUrl: './addfriendpopup.component.html',
  styleUrls: ['./addfriendpopup.component.scss']
})
export class PopupComponent 
{
  abrirPopup() {
    document.getElementById("overlay")?.classList.add("active");
    document.getElementById("popup")?.classList.add("active");
  }

  cerrarPopup() {
    document.getElementById("overlay")?.classList.remove("active");
    document.getElementById("popup")?.classList.remove("active");
  }

  seleccionarCategoria(categoria: string) {
    console.log("Categoría seleccionada:", categoria);
    this.cerrarPopup();
  }
}
