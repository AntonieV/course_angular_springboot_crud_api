import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Employee} from "./employee";

@Injectable({  // marks this class as a provider
  providedIn: 'root'  // and this service is provided at the root level
})
export class EmployeeshareService {

  private baseURL = "http://localhost:8080/api/v1/employees" // URL of the API
  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]> { // it returns a Employee object -> an array is needed
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);  // backticks!, this is a GET request (REST), it interprets the body as a JSON object
  }

  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, employee)
  }
}
