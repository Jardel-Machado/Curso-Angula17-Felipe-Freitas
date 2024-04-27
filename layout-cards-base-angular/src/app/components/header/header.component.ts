import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  @Input({required: true}) caminhoImagem!: string;

  @Input({required: true}) corFundo!: string;

  @Input({required: true}) titulo!: string;

  @Input() tituloSecundario!: string;
}
