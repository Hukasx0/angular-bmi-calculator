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
  pokaz: boolean = false;

  get bmi(): number {
    return parseFloat((this.waga / (this.wzrost ** 2 / 10000)).toFixed(2));
  }
  get poprawnosc_wagi(): boolean {
    return typeof this.waga === 'number' && this.waga <= 0;
  }
  get poprawnosc_wzrostu(): boolean {
    return typeof this.wzrost === 'number' && this.wzrost <= 0;
  }
  get poprawny_typ_bmi(): boolean {
    return (
      this.kategoria_bmi() !== BmiType.Err &&
      this.bmi < Number.POSITIVE_INFINITY &&
      this.bmi >= 0
    );
  }
  pokaz_wartosci() {
    this.pokaz = !this.pokaz;
  }
  kategoria_bmi(): BmiType {
    const bmi_type: Array<{ type: BmiType; max: number }> = [
      { type: BmiType.Niedowaga, max: 18.4 },
      { type: BmiType.Poprawne, max: 24.9 },
      { type: BmiType.Nadwaga, max: 29.9 },
      { type: BmiType.Otylosc, max: 34.9 },
      { type: BmiType.Otylosc2, max: Number.POSITIVE_INFINITY },
    ];
    return (
      bmi_type.find((item) => this.bmi <= item.max) || { type: BmiType.Err }
    ).type;
  }
}
