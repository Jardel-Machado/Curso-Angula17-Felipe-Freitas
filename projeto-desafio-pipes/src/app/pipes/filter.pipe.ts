import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[] | null, searchProp: string, searchValue: string): any[]  {

    //* Resolvendo com asyncPipe: foi necessário alterar o list no transform
    if (!list) {
      return [];
    }

    if (list.length === 0 || !searchValue) {
      return list;
    }

    return list.filter((item) => {
      return item[searchProp].toLowerCase().includes(searchValue.toLowerCase());
    });
  }

}
