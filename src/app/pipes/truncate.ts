import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {
  transform(text: null | string, maxLength: number) {
    if (!text) {
      return '';
    }

    if (text.length <= maxLength) {
      return text;
    }

    return `${text.substring(0, maxLength)}...`;
  }
}
