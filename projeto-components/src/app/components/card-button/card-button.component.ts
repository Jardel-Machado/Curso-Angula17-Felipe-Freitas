import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.scss',
})
export class CardButtonComponent {

  propTeste: boolean = false;

  @Input() buttonDisabled: boolean = false;

  @Output() buttonClickEmitter = new EventEmitter<boolean>();
  onButtonClick(){
    console.log('botão clicado');

    this.buttonClickEmitter.emit(this.propTeste);
  }
}
