import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DoubleColorMode } from 'bch-dc-components';

@Component({
  selector: 'app-general-error-template',
  templateUrl: './general-error-template.component.html',
  styleUrls: ['./general-error-template.component.scss'],
})
export class GeneralErrorTemplateComponent {
  @Input() public customButtonsAlignRight: boolean = false;
  @Input() public closeButtonMessage: string = 'Ok';
  @Input() public title: string = 'Title';
  @Output() public closed: EventEmitter<void> = new EventEmitter<void>();

  public colorModes: typeof DoubleColorMode = DoubleColorMode;

  public closeSelected(): void {
    this.closed.emit();
  }
}
