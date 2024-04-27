import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDisabled]'
})
export class DisabledDirective {

  constructor() { }

  // @HostBinding('attr.disabled') attrDisabled = false;

  @HostBinding('disabled') propDisabled = false;

}
