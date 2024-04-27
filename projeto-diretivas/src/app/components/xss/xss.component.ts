import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
  styleUrl: './xss.component.scss',
})
export class XssComponent {
  constructor(
    private readonly elRef: ElementRef,
    private readonly renderer2: Renderer2
  ) {}

  createElement(inputText: string) {
    const divEl = document.createElement('div');

    divEl.innerHTML = inputText;

    this.elRef.nativeElement.appendChild(divEl);
  }

  createElementCorrect(inputText: string) {
    const divEl = this.renderer2.createElement('div');

    const text = this.renderer2.createText(inputText);

    this.renderer2.appendChild(divEl, text);

    this.renderer2.setStyle(divEl, 'color', 'white');

    this.renderer2.addClass(divEl, 'bg-red');

    this.renderer2.appendChild(this.elRef.nativeElement, divEl)
  }
}
