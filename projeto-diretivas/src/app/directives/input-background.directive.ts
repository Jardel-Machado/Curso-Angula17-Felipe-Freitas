import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputBackground]'
})
export class InputBackgroundDirective {

  constructor() { }

  @Input() appInputBackground: string = 'white';

  @Input() textColor: string = 'black';

  @HostBinding('style.backgroundColor') bgColor: string = '';

  @HostBinding('style.color') color: string = '';

  @HostListener('focus') OnFocus() {
    this.bgColor = this.appInputBackground;
    this.color = this.textColor;
  }
  @HostListener('blur') OnBlur() {
    this.bgColor = 'white';
    this.color = 'black';
  }

}
