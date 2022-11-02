import { Injectable } from '@angular/core';
import 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from '../models/city.model';
import {map, catchError} from 'rxjs/operators'
import { ValidationService } from './validation.service';



@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http : HttpClient) { }

  getCities(): Observable<any>{
    return this.http.get("http://localhost:1901/api/Cities").pipe(
      map(cities=> cities),
      catchError(ValidationService.handleError));
  }
}
