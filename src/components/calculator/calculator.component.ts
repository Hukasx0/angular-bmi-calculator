import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BmiType } from '../../interfaces/bmi_type';

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
  oblicz_bmi(): BmiType {
    if (this.bmi < 18.5) {
      return BmiType.Niedowaga;
    } else if (this.bmi >= 18.5 && this.bmi < 24.9) {
      return BmiType.Poprawne;
    } else {
      return BmiType.Nadwaga;
    }
  }
}
