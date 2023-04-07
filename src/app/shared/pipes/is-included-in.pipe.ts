import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isIncludedIn'
})
export class IsIncludedInPipe implements PipeTransform {
  transform(value: string, substringOfValue: string): boolean {
    return substringOfValue?.includes(value);
  }
}
