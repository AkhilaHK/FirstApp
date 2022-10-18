import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {


  transform(value:"Akhila", ...args: unknown[]): unknown {
    var result=" ";
    for(var i=value.length-1; i>=0; i--)
    {
      result = result + value[i];
    }
    return result;
  }

}
