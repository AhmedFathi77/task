import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Department,Employee,EmployerForm} from '../models/employee'
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    "Access-Control-Allow-Methods": '*'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  getEmployeesURL:string    = 'http://localhost:9090/employee/get-employees';
  addEmployeesURL:string    = 'http://localhost:9090/employee/create-employee';
  editEmployeesURL:string   = 'http://localhost:9090/employee/update-employee/';
  deleteEmployeesURL:string = 'http://localhost:9090/employee/delete-employee/';
  filtersURL: String        = 'http://localhost:9090/employee/filter/';
  getDepartmentsURL:string  =  'http://localhost:9090/department/get-department';

  constructor(private http:HttpClient) { }

  // Get Employeers
  getEmployees():Observable<Employee[]> {
    return this.http.get<Employee[]>(this.getEmployeesURL , httpOptions);
  }

  getDepartmens():Observable<Department[]> {
    return this.http.get<Department[]>(this.getDepartmentsURL , httpOptions);
  }

  // Delete Empoyee
  deleteEmpoyee(id:number):Observable<Employee> {
    const url = `${this.deleteEmployeesURL}${id}`;
    return this.http.delete<Employee>(url, httpOptions);
  }

  // Add Empoyee
  addEmployee(emp:EmployerForm):Observable<Employee> {
    return this.http.post<Employee>(this.addEmployeesURL, emp, httpOptions);
  }

  // Edit Employee
  editEmployee(emp: Employee):Observable<any> {
    const url = `${this.editEmployeesURL}${emp.id}`;
    return this.http.put(url, emp, httpOptions);
  }

  // Edit Employee
  Filters(data: any):Observable<any> {
    const url = `${this.filtersURL}?name=${data.name}&age=${data.age}&salary=${data.salary}&dep_id=${data.dep_id}`;
    return this.http.get(url, httpOptions);
  }
  
}
