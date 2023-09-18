import { Component } from '@angular/core';
import { BmiType } from './types/bmi_type';

@Component({
  selector: 'Calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  // {-
    waga: number = 0;
    wzrost: number = 0;
    pokaz: boolean = false;
  // -}

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
    this.pokaz = true;
  }

  private znajdz_bmi(): BmiType {
    const bmi_type: Array<{ type: BmiType; max: number }> = [
      {    type: BmiType.Niedowaga,       max: 18.4                       },
      {    type: BmiType.Poprawne,        max: 24.9                       },
      {    type: BmiType.Nadwaga,         max: 29.9                       },
      {    type: BmiType.Otylosc,         max: 34.9                       },
      {    type: BmiType.Otylosc2,        max: Number.POSITIVE_INFINITY   },
    ];

    return (
      bmi_type.find((type) => this.bmi <= type.max) || { type: BmiType.Err }
    ).type;
  }

  kategoria_bmi(): BmiType {
    return this.znajdz_bmi();
  }

  get kolor_rezultatu(): string {
    return this.znajdz_bmi() === BmiType.Niedowaga ? 'is-info' :
           this.znajdz_bmi() === BmiType.Poprawne ? 'is-success' :
           this.znajdz_bmi() === BmiType.Nadwaga ? 'is-info' :
           'is-danger' ;
  }
}
