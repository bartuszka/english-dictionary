import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  @Input() public headerHeight: number;
  @Input() public sideMenuWidth: number = 270;
  @Input() public isVisible: boolean;

  public toggleMenu() {
    this.isVisible = !this.isVisible;
  }
}
