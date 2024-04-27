import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FilhoComponent } from './components/filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('meuInput') meuInputEl!: ElementRef<HTMLInputElement>;

  @ViewChild('minhaDiv') minhaDivEl!: ElementRef<HTMLDivElement>;

  @ViewChild('filhoComp') filhoCompRef!: FilhoComponent;
  //*Quando for componente outra forma de fazer é usando o próprio componente como parametro no
  //*ViewChild conforme ABAIXO:
  //*@ViewChild(FilhoComponent) filhoCompRef!: FilhoComponent;

  constructor() {}
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.focus();
  }
  updateInputText() {
    this.meuInputEl.nativeElement.value = 'Atualizado';
  }

  focus() {
    this.meuInputEl.nativeElement.focus();
  }

  AlterarConteudoDaDiv() {
    this.minhaDivEl.nativeElement.textContent = 'Conteúdo Atualizado!';
  }

  hello() {
    this.filhoCompRef.dizerOi();
    this.filhoCompRef.message = 'Eu disse "Oi"!';
  }
}
