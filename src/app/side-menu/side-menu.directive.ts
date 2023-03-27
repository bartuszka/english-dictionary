import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSideMenu]'
})
export class SideMenuDirective implements AfterViewInit {
  @Input() public headerHeight: number;
  @Input() public sideMenuWidth: number;

  private readonly parentComponent: HTMLElement;
  private isMobile: boolean;
  private _isVisible: boolean;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.parentComponent = this.elementRef.nativeElement.parentElement;
  }

  @HostListener('window:resize', ['$event']) onResize(event: Event) {
    this.setDimensions((event.target as Window).innerWidth);
  }

  @Input() public set isVisible(isVisible: boolean) {
    this._isVisible = isVisible;
    this.setHiddenClass(this._isVisible);
    this.setLeftPosition(isVisible);
    !isVisible ? setTimeout(this.setTransitions.bind(this, isVisible), 300) : this.setTransitions(isVisible);
  }

  public ngAfterViewInit(): void {
    this.setDimensions(window.innerWidth);
  }

  private setDimensions(windowWidth: number) {
    const isMobile = !(windowWidth > 768);

    if (this.isMobile !== isMobile) {
      this.isMobile = isMobile;
      this.setLeftPosition(this._isVisible);
      this.renderer.setStyle(this.parentComponent, 'width',
        !this.isMobile ? this.sideMenuWidth + 'px' : '100%');
    }

    this.renderer.setStyle(this.parentComponent, 'height', window.innerHeight - this.headerHeight + 'px');
  }

  private setLeftPosition(isVisible: boolean): void {
    if (this.sideMenuWidth) {
      this.renderer.setStyle(this.parentComponent, 'margin-left',
        !isVisible && !this.isMobile ? -this.sideMenuWidth + 'px' : 0);
    }
  }

  private setHiddenClass(isVisible: boolean): void {
    isVisible
      ? this.renderer.removeClass(this.parentComponent, 'hidden')
      : this.renderer.addClass(this.parentComponent, 'hidden');
  }

  private setTransitions(isVisible: boolean): void {
    this.renderer.setStyle(this.parentComponent, 'transition', !isVisible ? 'none ease-out .2s' : 'all ease-out .2s');
  }
}
