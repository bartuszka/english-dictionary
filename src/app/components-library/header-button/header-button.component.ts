import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-button',
  templateUrl: './header-button.component.html',
  styleUrls: ['./header-button.component.scss']
})
export class HeaderButtonComponent {
  @Input() public message: string;
  @Input() public pageUrl: string;
}
