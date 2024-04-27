import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(userNome: string, maxLength: number): string {

    if(!userNome){
      return '';
    }

    const VALUE_LESS_THAN_MAX_LENGTH = userNome.length <= maxLength;

    if (VALUE_LESS_THAN_MAX_LENGTH) {
      return userNome;
    }

    return userNome.slice(0, maxLength) + '...';
  }

}
