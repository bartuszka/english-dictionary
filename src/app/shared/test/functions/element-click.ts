import { DebugElement } from '@angular/core';

export function elementClick(element: DebugElement | HTMLElement): void {
  element instanceof  HTMLElement ? element.click() : element.triggerEventHandler('click');
}
