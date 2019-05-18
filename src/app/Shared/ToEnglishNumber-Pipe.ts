import { Pipe, PipeTransform} from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'ToEnglishNumberPipe'
})
export class ToEnglishNumber extends DecimalPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    debugger
      if(!this.contain_persian_char(value))
return value
    const regex = /[۰-۹]/g
let str = value;
let result = str.replace(regex, function (w) {
    return String.fromCharCode(w.charCodeAt(0) - 1728)
  }
)
  }
    contain_persian_char(str){
    var p = /^[\u0600-\u06FF\s]+$/;

    if (p.test(str)) 
        return true;
    return false;
}
}
