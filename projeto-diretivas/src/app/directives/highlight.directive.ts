import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor() {}

  //*Diretiva de atributo => pois altera o atributos de <p> nesse exemplo

  @HostBinding('style.background-color') bgColor = 'transparent';

  //*Escuta o evento
  @HostListener('mouseover') onMouseOver() {
    this.bgColor = 'orange';
  }

  @HostListener('mouseout') onMouseOut() {
    this.bgColor = 'transparent';
  }
}
