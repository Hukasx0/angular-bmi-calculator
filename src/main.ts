import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { Calculator } from './components/calculator/calculator.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, Calculator],
  template: `
    <h1>Bmi calculator</h1>
    <Calculator />
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
