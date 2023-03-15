import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSideMenu]'
})
export class SideMenuDirective implements AfterViewInit {
  @Input() public headerHeight: number;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  public ngAfterViewInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'height', window.innerHeight - this.headerHeight + 'px');
  }
}
