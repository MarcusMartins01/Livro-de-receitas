import { Component, OnInit } from '@angular/core';
const daysInWeek = 7;


@Component({
  selector: 'app-cotas',
  templateUrl: './cotas.component.html',
  styleUrls: ['./cotas.component.css']
})



export class CotasComponent {
  currentYear: number = new Date().getFullYear();
  currentMonth: number = new Date().getMonth();
  currentMonthName: string = this.getMonthName(this.currentMonth);
  dayNames: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


  calendarDays: number[] = [];
  recipesDone: number = 0; // Adicionando a propriedade para acompanhar as receitas feitas

  

  constructor() {
    this.generateCalendar();
  }

  private generateCalendar(): void {
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

    // Generate an array from 1 to the number of days in the month
    this.calendarDays = Array.from({ length: daysInMonth }, (_, index) => index + 1);
  }

  private getMonthName(month: number): string {
    const monthNames = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ];

    return monthNames[month];
  }

  prevMonth(): void {
    this.currentMonth = this.currentMonth === 0 ? 11 : this.currentMonth - 1;
    this.currentYear = this.currentMonth === 11 ? this.currentYear - 1 : this.currentYear;
    this.currentMonthName = this.getMonthName(this.currentMonth);
    this.generateCalendar();
  }

  nextMonth(): void {
    this.currentMonth = this.currentMonth === 11 ? 0 : this.currentMonth + 1;
    this.currentYear = this.currentMonth === 0 ? this.currentYear + 1 : this.currentYear;
    this.currentMonthName = this.getMonthName(this.currentMonth);
    this.generateCalendar();
  }
}
  