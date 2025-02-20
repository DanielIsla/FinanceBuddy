import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Day {
  day: number;
  isPreviousMonth: boolean;
  isNextMonth: boolean;
  isFuture: boolean;  // Nueva propiedad para marcar días futuros
}

@Component({
  selector: 'app-calendarselector',
  standalone: true,
  imports: [NgxDaterangepickerMd, FormsModule, CommonModule],
  templateUrl: './calendarselector.component.html',
  styleUrls: ['./calendarselector.component.scss'],
})
export class CalendarselectorComponent {
  currentDate: Date = new Date();
  days: Day[] = [];
  startDate: Date | null = null;
  endDate: Date | null = null;
  prevMonthLastDate: number = 0;
  today: Date = new Date();  // Para comparar fechas futuras

  @ViewChild('popupContainer') popupContainer!: ElementRef;
  @Output() dateRangeSelected = new EventEmitter<{ start: Date, end: Date }>();

  constructor() {
    this.generateCalendar();
  }
  
  resetCalendar() {
    this.currentDate = new Date();
    this.startDate = null;
    this.endDate = null;
    this.generateCalendar();
  }

  generateCalendar() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const prevMonthLastDate = new Date(year, month, 0).getDate();
    this.prevMonthLastDate = prevMonthLastDate;

    const nextMonthFirstDay = new Date(year, month + 1, 1).getDay();
    const nextMonthDays = [...Array(7 - (lastDate + firstDay) % 7).keys()].map(i => i + 1);

    const prevMonthDays = [];
    for (let i = prevMonthLastDate - firstDay + 1; i <= prevMonthLastDate; i++) {
      prevMonthDays.push({ day: i, isPreviousMonth: true, isNextMonth: false, isFuture: false });
    }

    const currentMonthDays = [...Array(lastDate).keys()].map(i => i + 1).map(day => ({
      day,
      isPreviousMonth: false,
      isNextMonth: false,
      isFuture: this.isFutureDate(new Date(year, month, day)), // Marcar fechas futuras
    }));

    const nextMonthDaysObjects = nextMonthDays.map(day => ({
      day,
      isPreviousMonth: false,
      isNextMonth: true,
      isFuture: true, // Todos los días del próximo mes son futuros
    }));

    this.days = [...prevMonthDays, ...currentMonthDays, ...nextMonthDaysObjects];
  }

  isFutureDate(date: Date): boolean {
    return date > this.today;
  }

  changeMonth(offset: number) {
    const newDate = new Date(this.currentDate);
    newDate.setMonth(newDate.getMonth() + offset);
  
    const today = new Date();

    // Solo permitir cambiar a meses anteriores, no al futuro
    if (newDate > today) {
      return;
    }
  
    this.currentDate = newDate;
    this.generateCalendar();
  }
  
  

  selectDate(day: number) {
    const selectedDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day);

    if (selectedDate > this.today) {
      return; // Evitar selección de fechas futuras
    }

    if (!this.startDate || (this.startDate && this.endDate)) {
      this.startDate = selectedDate;
      this.endDate = null;
    } else if (selectedDate >= this.startDate) {
      this.endDate = selectedDate;
      this.emitDateRange();
    } else {
      this.endDate = this.startDate;
      this.startDate = selectedDate;
      this.emitDateRange();
    }
  }

  isRangeStart(day: number): boolean | null {
    return this.startDate && this.isSameDate(this.startDate, day);
  }

  isRangeEnd(day: number): boolean | null {
    return this.endDate && this.isSameDate(this.endDate, day);
  }

  isInRange(day: number): boolean {
    if (!this.startDate || !this.endDate) return false;
    const selectedDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day);
    return selectedDate > this.startDate && selectedDate < this.endDate;
  }

  isSameDate(date: Date, day: number): boolean {
    return date.getFullYear() === this.currentDate.getFullYear() &&
      date.getMonth() === this.currentDate.getMonth() &&
      date.getDate() === day;
  }

  emitDateRange() {
    if (this.startDate && this.endDate) {
      this.dateRangeSelected.emit({ start: this.startDate, end: this.endDate });
    }
  }

  abrirPopup() {
    this.popupContainer.nativeElement.classList.add('mostrar');
    this.resetCalendar();
  }

  cerrarPopup() {
    this.popupContainer.nativeElement.classList.remove('mostrar');
  }
}
