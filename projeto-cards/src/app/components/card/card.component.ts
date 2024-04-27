import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ required: true }) cardStyle: 'orange' | 'purple' = 'orange';

  @Input({ required: true }) cardText: string = '';

  @Input({ required: true }) cardPrice: number = 0;

  @Output() buttonClickedEmitt = new EventEmitter<void>();

  onButtonClicked() {
    this.buttonClickedEmitt.emit();
  }
}
