import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  text = 'Jardel';

  pessoa = {
    name: 'Felipe',
    status: 1
  }

  pessoa2 = {
    name: 'Matheus',
    status: 2
  }

  pessoa3 = {
    name: 'Luis',
    status: 3
  }


  //* Não usar essa solução
  getStyle(status: number){
    console.log('getStyle')
    return {
      'active': status === 1,
      'partial': status === 2,
      'blocked': status === 3,
    };
  }
}
