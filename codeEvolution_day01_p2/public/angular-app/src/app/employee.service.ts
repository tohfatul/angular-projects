import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './models/IEmployee';
import { Employee } from './models/Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url:string="/assets/data/employees.json";

  constructor(private http: HttpClient) { }

  getEmployees():Observable<IEmployee[]>{
    // return [
    //   {"id": 1, "name": "Mr X", "age": 30},
    //   {"id": 2, "name": "Mr y", "age": 31},
    //   {"id": 3, "name": "Mr z", "age": 32},
    //   {"id": 4, "name": "Mr xyz", "age": 33}
    // ]

    return this.http.get<IEmployee[]>(this._url);
  }
}
