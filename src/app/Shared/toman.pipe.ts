import { Pipe, PipeTransform} from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'toman'
})
export class TomanPipe extends DecimalPipe implements PipeTransform {

  transform(value: string, args?: any): any {
       
      if(value==null) return ;
    return `${super.transform(value.toString())} تومان`
  }

}
