import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  contidion: boolean = false;

  //* ng-template via Input

  @Input() header!: TemplateRef<any>;
  @Input() content!: TemplateRef<any>;
  @Input() footer!: TemplateRef<any>;

  @ContentChild('contentChild') conteudo!: TemplateRef<any>;
}
