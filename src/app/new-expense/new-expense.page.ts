import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { categories } from '../models/categories';

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
  headerStep: string = "Paso 1 de 5";
  nextBtnText: string = "Continuar";
  selectedCategory: string | undefined = "";

  categories = categories;

  ngOnInit() {
    console.log(this.categories);
    this.changeHeaderTexts();
  }

  selectCategory(category: string | undefined) {
    this.selectedCategory = category;
    console.log(this.selectedCategory);
    this.nextPage();
  }

  selectSubCategory(category: string | undefined) {
    this.selectedCategory = category;
    console.log(this.selectedCategory);
    this.nextPage();
  }

  nextPage() {
    if (this.pageNumber != 5) {
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
        this.headerStep = "Paso 1 de 5";
        this.nextBtnText = "Continuar"
        break;
      }

      case 2:
        {
          this.headerAction = "Selecciona una subcategoría";
          this.headerStep = "Paso 2 de 5";
          this.nextBtnText = "Continuar"
          break;
        }

      case 3:
        {
          this.headerAction = "Introduce el importe";
          this.headerStep = "Paso 3 de 5";
          this.nextBtnText = "Continuar"
          break;
        }

      case 4:
        {
          this.headerAction = "Cuenta de cargo";
          this.headerStep = "Paso 4 de 5";
          this.nextBtnText = "Continuar"
          break;
        }

      case 5:
        {
          this.headerAction = "Resumen de operación";
          this.headerStep = "Paso 5 de 5";
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
