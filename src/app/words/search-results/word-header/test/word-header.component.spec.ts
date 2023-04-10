import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SearchResultsModule } from '../../search-results.module';
import { WordHeaderComponent } from '../word-header.component';
import { getTestNoun, getTestOtherWord, getTestVerb } from '../../../../shared/test/word-data';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { WordTypeShortcutPipe } from '../../../../shared/pipes/word-type-shortcut.pipe';
import { elementClick } from '../../../../shared/test/functions/element-click';
import { OtherWord } from '../../../models/other-word';

describe('WordHeaderComponent', () => {
  let wordHeaderComponent: WordHeaderComponent;
  let fixture: ComponentFixture<WordHeaderComponent>;
  let debugEl: DebugElement;
  let wordTypeShortcut: WordTypeShortcutPipe;

  beforeEach(waitForAsync (waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        SearchResultsModule
      ],
      providers: [
        WordTypeShortcutPipe,
      ]
    }).compileComponents()
      .then(() => {
        wordTypeShortcut = TestBed.inject(WordTypeShortcutPipe);
        fixture = TestBed.createComponent(WordHeaderComponent);
        wordHeaderComponent = fixture.componentInstance;
        debugEl = fixture.debugElement;
      });
  })));

  it('Should create component', () => {
    expect(wordHeaderComponent).toBeTruthy();
  });


  it('Should display an other word', () => {
    const testOtherWord: OtherWord = getTestOtherWord();
    wordHeaderComponent.word = getTestOtherWord();
    fixture.detectChanges();

    const wordHeader: DebugElement = debugEl.query(By.css('.title'));
    const wordName: DebugElement = debugEl.query(By.css('h1'));
    const wordPronunciation: DebugElement = wordHeader.query(By.css('.title > div > span:first-of-type'));
    const verbFeatures: DebugElement = wordHeader.query(By.css('#verbFeatures'));
    const nounFeatures: DebugElement = wordHeader.query(By.css('#nounFeatures'));

    expect(wordHeaderComponent).toBeTruthy();
    expect(wordHeader).toBeTruthy();
    expect(wordName.nativeElement.textContent).toBe(testOtherWord.name);
    expect(wordPronunciation.nativeElement.textContent).toBe(`/${ testOtherWord.pronunciation }/`);
    expect(verbFeatures).toBeFalsy();
    expect(nounFeatures).toBeFalsy();
  });


  it('Should display a verb', () => {
    const testVerb = getTestVerb();
    wordHeaderComponent.word = testVerb;
    fixture.detectChanges();

    const wordHeader: DebugElement = debugEl.query(By.css('.title'));
    const verbFeatures: DebugElement = wordHeader.query(By.css('#verbFeatures'));
    const nounFeatures: DebugElement = wordHeader.query(By.css('#nounFeatures'));
    const verbTypes: DebugElement = verbFeatures.query(By.css('span'));

    const verbSecondForm: DebugElement = verbFeatures.query(By.css('#verbSecondForm'));
    const verbThirdForm: DebugElement = verbFeatures.query(By.css('#verbThirdForm'));

    expect(verbFeatures).toBeTruthy();
    expect(nounFeatures).toBeFalsy();
    expect(verbTypes.nativeElement.textContent).toBe(`(${ wordTypeShortcut.transform(testVerb.verbTypes) })`);

    if (testVerb.secondForm) {
      const verbSecondFormSpelling: DebugElement = verbSecondForm.query(By.css('span:first-of-type'));
      const verbSecondFormPronunciation: DebugElement = verbSecondForm.query(By.css('span:last-of-type'));

      expect(verbSecondForm).toBeTruthy();
      expect(verbSecondFormSpelling.nativeElement.textContent).toBe(`[${ testVerb.secondForm }`);
      expect(verbSecondFormPronunciation.nativeElement.textContent).toBe(`/${ testVerb.secondFormPronunciation }/`);
    } else {
      expect(verbSecondForm).toBeFalsy();
    }

    if (testVerb.thirdForm) {
      const verbThirdFormSpelling: DebugElement = verbThirdForm.query(By.css('span:first-of-type'));
      const verbThirdFormPronunciation: DebugElement = verbThirdForm.query(By.css('span:last-of-type'));

      expect(verbThirdForm).toBeTruthy();
      expect(verbThirdFormSpelling.nativeElement.textContent).toBe(`| ${ testVerb.thirdForm }`);
      expect(verbThirdFormPronunciation.nativeElement.textContent).toBe(`/${ testVerb.thirdFormPronunciation }/]`);
    } else {
      expect(verbThirdForm).toBeFalsy();
    }
  });


  it('Should display a noun', () => {
    const testNoun = getTestNoun();
    wordHeaderComponent.word = testNoun;
    fixture.detectChanges();

    const wordHeader: DebugElement = debugEl.query(By.css('.title'));
    const verbFeatures: DebugElement = wordHeader.query(By.css('#verbFeatures'));
    const nounFeatures: DebugElement = wordHeader.query(By.css('#nounFeatures'));
    const nounTypes: DebugElement = nounFeatures.query(By.css('span'));
    const nounPluralForm: DebugElement = nounFeatures.query(By.css('#nounPluralForm'));

    expect(verbFeatures).toBeFalsy();
    expect(nounFeatures).toBeTruthy();
    expect(nounTypes.nativeElement.textContent).toBe(`(${ wordTypeShortcut.transform(testNoun.nounTypes) })`);

    if (testNoun.pluralForm) {
      const nounPluralFormSpelling: DebugElement = nounPluralForm.query(By.css('span:first-of-type'));
      const nounPluralFormPronunciation: DebugElement = nounPluralForm.query(By.css('span:last-of-type'));

      expect(nounPluralFormSpelling.nativeElement.textContent).toBe(`[${ testNoun.pluralForm }`);
      expect(nounPluralFormPronunciation.nativeElement.textContent).toBe(`/${ testNoun.pluralFormPronunciation }/]`);
    }
  });


  it('Should display word type and edit button', () => {
    const testOtherWord = getTestOtherWord();
    wordHeaderComponent.word = testOtherWord;
    fixture.detectChanges();

    const wordHeader: DebugElement = debugEl.query(By.css('.title'));
    const rightGroup: DebugElement = wordHeader.query(By.css('#right-group'));
    const editButton: DebugElement = rightGroup.query(By.css('#edit-button'));
    const wordType: DebugElement = rightGroup.query(By.css('#word-type'));

    expect(rightGroup).toBeTruthy();
    expect(editButton).toBeTruthy();
    expect(wordType).toBeTruthy();
    expect(wordType.nativeElement.textContent).toBe(testOtherWord.wordType);
  });


  it('Should call editWord method on edit button click', () => {
    wordHeaderComponent.word = getTestOtherWord();

    spyOn(wordHeaderComponent, 'editWord');
    fixture.detectChanges();

    const editButton: DebugElement = debugEl.query(By.css('#edit-button'));
    elementClick(editButton);

    expect(wordHeaderComponent.editWord).toHaveBeenCalled();
  });


  it('Should emit event on edit button click', () => {
    wordHeaderComponent.word = getTestOtherWord();

    spyOn(wordHeaderComponent.wordEditSelected, 'emit');
    fixture.detectChanges();

    const editButton: DebugElement = debugEl.query(By.css('#edit-button'));
    elementClick(editButton);

    expect(wordHeaderComponent.wordEditSelected.emit).toHaveBeenCalled();
  });
});
