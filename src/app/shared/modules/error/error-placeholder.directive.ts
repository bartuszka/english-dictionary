import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appErrorPlaceholder]'
})
export class ErrorPlaceholderDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
