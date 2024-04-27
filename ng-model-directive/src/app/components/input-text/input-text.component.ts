import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
})
export class InputTextComponent implements AfterViewInit {
  nome: string = 'Jardel';

  @ViewChild('meuInputFormControl') inputElFormControl!: NgModel;
  @ViewChild('meuInput') inputEl!: ElementRef<HTMLInputElement>;

  ngAfterViewInit(): void {
    console.log('Form Control => ', this.inputElFormControl);
    console.log('Original => ', this.inputEl);
  }
  onChance(text: string) {
    console.log(text);
  }
  show() {
    console.log(this.nome);
  }
  send() {
    if (this.inputElFormControl.valid && this.inputElFormControl.touched) {
      console.log('Enviado com Sucesso');
    }
  }
}
