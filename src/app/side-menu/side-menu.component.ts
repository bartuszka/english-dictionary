import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  @Input() public headerHeight: number;
  @Output() public sideMenuToggled: EventEmitter<void> = new EventEmitter<void>();

  public emitSideMenuToggled() {
    this.sideMenuToggled.emit();
  }
}
