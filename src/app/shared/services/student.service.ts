import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'
import { ValidationService } from './validation.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  insertStudent(formData): Observable<any> {
    return this.http.post("http://localhost:1901/api/Students", formData).pipe(
      catchError(ValidationService.handleError));

  }

  getStudents(): Observable<any> {
    return this.http.get("http://localhost:1901/api/Students").pipe(
      map(students => students),
      catchError(ValidationService.handleError));

  }

}
