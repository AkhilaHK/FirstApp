import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], ...args: unknown[]): any {
    var result:any[] = [];
    for(var i=0; i<value.length; i++){
      if(value[i].includes(args[0])){
        result.push(value[i]);
      }
    }
    return result;
  }

}
