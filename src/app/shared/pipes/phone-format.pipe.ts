import { Pipe, PipeTransform } from '@angular/core';
  
@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {
  
  transform(number) {
    return number.slice(0,3)+"-"+number.slice(3,number.length-1);
  }
  
} 