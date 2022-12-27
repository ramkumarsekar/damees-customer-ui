import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngrCarouselItem]'
})
export class NgrCarouselItemDirective {

  constructor(public tpl: TemplateRef<any>) {}

}
