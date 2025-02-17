import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.page.html',
  styleUrls: ['./new-expense.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NewExpensePage implements OnInit {

  constructor() { }

  pageNumber: number = 1;
  headerAction: string = "Selecciona un amigo";
  headerStep: string = "Paso 1 de 4";
  nextBtnText: string = "Continuar";

  ngOnInit() 
  {
    this.changeHeaderTexts();
  }

  nextPage() {
    if (this.pageNumber != 4) {
      this.pageNumber = this.pageNumber + 1;
    }

    this.changeHeaderTexts();
  }

  prevPage() {
    if (this.pageNumber != 1) {
      this.pageNumber = this.pageNumber - 1;
    }

    this.changeHeaderTexts();
  }

  changeHeaderTexts() {
    switch (this.pageNumber) {
      case 1: {
        this.headerAction = "Selecciona una categoría";
        this.headerStep = "Paso 1 de 4";
        this.nextBtnText = "Continuar"
        break;
      }
      case 2:
        {
          this.headerAction = "Introduce el importe";
          this.headerStep = "Paso 2 de 4";
          this.nextBtnText = "Continuar"
          break;
        }

      case 3:
        {
          this.headerAction = "Cuenta de cargo";
          this.headerStep = "Paso 3 de 4";
          this.nextBtnText = "Continuar"
          break;
        }

      case 4:
        {
          this.headerAction = "Resumen de operación";
          this.headerStep = "Paso 4 de 4";
          this.nextBtnText = "Finalizar"
          break;
        }

      default:
        {
          break;
        }
    }

  }

}
