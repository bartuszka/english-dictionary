import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Word } from '../../models/general-word';

@Component({
  selector: 'app-word-header',
  templateUrl: './word-header.component.html',
  styleUrls: ['./word-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordHeaderComponent {
  @Input() public word: Word;
  @Output() public wordEditSelected: EventEmitter<void> = new EventEmitter<void>();

  public editWord(): void {
    this.wordEditSelected.emit();
  }
}
