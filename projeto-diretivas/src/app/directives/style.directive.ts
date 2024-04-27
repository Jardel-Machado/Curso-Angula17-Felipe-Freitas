import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  constructor() {}

  // @HostBinding('attr.style') attrStyle = 'background-color: orange; color: white;';

  // @HostBinding('style') propStyle = 'background-color: orange; color: white;';

  // @HostBinding('style') propStyleObj = {
  //   backgroundColor: 'orange',
  //   color: 'white',
  // };

  @HostBinding('style.backgroundColor') bgColor = 'orange';
  @HostBinding('style.color') color = 'white';
  @HostBinding('style.font-size.px') fontSize = 40;
}
