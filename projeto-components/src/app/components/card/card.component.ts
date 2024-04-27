import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  //* encapsulation: ViewEncapsulation.None //*Isso faz com que o css local vire global.
  //* encapsulation: ViewEncapsulation.Emulated //*Esse é o padrão css local não vaza para outro
  //* encapsulation: ViewEncapsulation.ShadowDom //*Isola completamente o componente, o css global não afeta o css local e o local não afeta outros componentes(exceção para os componentes filhos que estão referenciados).
})
export class CardComponent {
  plano = {
    infos: {
      tipo: 'Simples',
      preco: 100,
    },
  };

  // @Input() planType: string = "";
  @Input() planPrice: number = 0;

  //*Usando input com transform

  @Input({alias: 'planType', transform: (value: string) =>  value.toUpperCase()}) planType: string = '';

  //* Usando input com Get e Set

  //* private _planType: string = "";

  //* @Input()
  //* set planType(value: string){
  //*   this._planType = value.toUpperCase();
  //* }

  //* get planType(): string{
  //*   return this._planType;
  //* }

  //*para tornar um input obrigatório usar a sintaxe abaixo:
  //*@Input({ required: true }) planPrice: number = 0;

  buttonCliked(valueEmitted: boolean) {
    console.log('buttonCliked', valueEmitted);
    // console.log('planType', this.planType);
  }
}
