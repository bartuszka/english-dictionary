import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NounTranslationExample, VerbTranslationExample, WordTranslationExample } from '../../models/translation-example';

@Component({
  selector: 'app-word-translation',
  templateUrl: './word-translation.component.html',
  styleUrls: ['./word-translation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordTranslationComponent {
  @Input() public translation: WordTranslationExample | VerbTranslationExample | NounTranslationExample;
}
