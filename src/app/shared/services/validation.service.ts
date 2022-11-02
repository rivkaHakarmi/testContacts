import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {


    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
      let config = {
        'required': 'שדה חובה',
        'minlength': `אורך שדה מינימלי  ${validatorValue.requiredLength} תווים`,
        'hebrew': `עברית בלבד`,
        'maxlength': `אורך שדה מקסימלי ${validatorValue.requiredLength} תווים`,
        'mail': `כתובת דוא"ל לא תקנית`,
        'phoneNum': `שדה זה חייב להכיל 9 ספרות`

      };
  
      return config[validatorName];
    }
  
      
    static hebrewValidator(control) {
      if (control.value.match(/^[\u0590-\u05FF ]*$/)) {
        return null;
      } else {
        return { 'hebrew': true };
      }
    }

    static emailValidator(control) {
      if (control.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        return null;
      } else {
        return { 'mail': true };
      }
    }

    static phoneNumberValidator(control) {
      if (control.value.match(/^[0-9]{9}$/)) {
        return null;
      } else {
        return { 'phoneNum': true };
      }
    }

    static handleError(error: HttpErrorResponse){
      return throwError(error);
  }
}

