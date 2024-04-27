import { Component } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrl: './ex1.component.scss',
})
export class Ex1Component {
  nome: string = 'Jardel';

  onChange(text: string) {
    console.log(text);
  }

  onClick() {
    console.log(this.nome);
  }
}
