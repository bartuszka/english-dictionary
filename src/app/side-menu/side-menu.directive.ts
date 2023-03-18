import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSideMenu]'
})
export class SideMenuDirective implements AfterViewInit {
  @Input() public headerHeight: number;
  @Input() public sideMenuWidth: number;

  private _isVisible: boolean;
  private isMobile: boolean;

  @Input() public set isVisible(isVisible: boolean) {
    this._isVisible = isVisible;
    isVisible
      ? this.renderer.removeClass(this.elementRef.nativeElement.parentElement, 'hidden')
      : this.renderer.addClass(this.elementRef.nativeElement.parentElement, 'hidden');
    this.setLeftPosition(isVisible);
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:resize', ['$event']) onResize(event: Event) {
    this.setDimensions((event.target as Window).innerWidth);
  }

  public ngAfterViewInit() {
    this.setDimensions(window.innerWidth);
    this.setLeftPosition(this._isVisible);
  }

  private setDimensions(windowWidth: number) {
    this.isMobile = !(windowWidth > 768);

    this.renderer.setStyle(this.elementRef.nativeElement, 'height',
      !this.isMobile ? window.innerHeight - this.headerHeight + 'px' : 'auto');

    this.renderer.setStyle(this.elementRef.nativeElement.parentElement, 'width',
      !this.isMobile ? this.sideMenuWidth + 'px' : '100%');

    this.setLeftPosition(this._isVisible);
  }

  private setLeftPosition(isVisible: boolean): void {
    if (this.sideMenuWidth) {
      this.renderer.setStyle(this.elementRef.nativeElement.parentElement, 'margin-left',
        !isVisible && !this.isMobile ? -this.sideMenuWidth + 'px' : 0);
    }
  }
}
