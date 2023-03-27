import { Component, EventEmitter, Input, Output } from '@angular/core';

import { HeaderButton } from './models/header-button';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() public title: string;
  @Input() public sideMenuWidth: number;
  @Input() public buttons: HeaderButton[];
  @Output() public pageSelected: EventEmitter<HeaderButton> = new EventEmitter<HeaderButton>();

  public menuOpened: boolean = false;

  public selectPage(button: HeaderButton): void {
    this.menuOpened = false;
    this.pageSelected.emit(button);
  }
}
