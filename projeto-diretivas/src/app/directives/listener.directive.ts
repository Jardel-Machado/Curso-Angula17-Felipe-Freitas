import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appListener]'
})
export class ListenerDirective {

  constructor() { }

  @HostListener('click') onClick() {
    console.log('clicou!');
  }

  @HostListener('keyup', ['$event', '"Meu Argumento"']) onKeyup(event: KeyboardEvent, parametro2: string) {
    console.log('A tecla precionada foi: ', event.key);

    console.log('O parametro 2 é: ', parametro2);

    const fullText = (event.target as HTMLInputElement).value

    console.log(fullText);
  }
}
