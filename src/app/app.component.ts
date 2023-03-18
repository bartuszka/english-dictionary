import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public headerHeight: number = 70;
  public sideMenuWidth: number = 270;
  public isSideMenuVisible = true;
}
