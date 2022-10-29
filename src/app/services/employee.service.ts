import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = "../assets/employees.json";
  staticEmployeeList = [
    {"id": 1, "name": "test 1", "address": "colombo"},
    {"id": 2, "name": "test 2", "address": "kegalle"},
    {"id": 3, "name": "test 3", "address": "alawwa"}
  ];

  constructor(private httpClient : HttpClient) { }

  getEmployees(): Observable<Employee[]>{
    const employeeObsArray = of<Employee[]>(this.staticEmployeeList);
    return employeeObsArray;
    // return this.httpClient.get<Employee[]>(this.url).pipe(catchError(this.handleError));
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee[]>(this.url).pipe(map(data => data.filter(c => c.id == id)[0])  ,catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse){
    return throwError(() => new Error);
  }
}
