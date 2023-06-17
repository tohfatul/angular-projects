import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list-detail',
  templateUrl: './employee-list-detail.component.html',
  styleUrls: ['./employee-list-detail.component.css']
})
export class EmployeeListDetailComponent implements OnInit{

  employees:any[]=[];

  constructor(private _employeeService: EmployeeService){

  }

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe({
      next:data=>this.employees=data,
      error: err=> {this.employees=[]; console.log(err.message)}
    });
  }

}
