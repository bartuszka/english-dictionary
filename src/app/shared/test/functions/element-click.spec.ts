import { elementClick } from './element-click';
import { DebugElement } from '@angular/core';

describe('elementClick', () => {
  let htmlElement: HTMLElement;

  beforeEach(() => {
    htmlElement = document.createElement('button');
  });


  it ('should trigger click when HTMLElement clicked', () => {
    spyOn(htmlElement, 'click');
    elementClick(htmlElement);
    expect(htmlElement.click).toHaveBeenCalled();
  });

  it ('should call triggerEventHandler when DebugElement clicked', () => {
    const debugElement: DebugElement = new DebugElement(htmlElement);
    spyOn(debugElement, 'triggerEventHandler');
    elementClick(debugElement);
    expect(debugElement.triggerEventHandler).toHaveBeenCalled();
  });
});
