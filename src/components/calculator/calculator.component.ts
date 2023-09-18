import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'Calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator.component.html',
})
export class Calculator {
  waga: number = 0;
  wzrost: number = 0;
  get bmi(): number {
    return parseFloat((this.waga / (this.wzrost ** 2 / 10000)).toFixed(2));
  }
}
