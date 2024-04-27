import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  cardOrange = {
    text: 'Simples',
    style: 'orange' as const,
    price: 100
  };

  cardPurple = {
    text: 'Completo',
    style: 'purple' as const,
    price: 200
  };

  OnCardButtonCliked() {
    console.log('OnCardButtonCliked');
  }
}
