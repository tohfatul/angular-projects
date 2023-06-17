import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees:any[] = [];

  constructor(private _employeeService: EmployeeService){

  }

  ngOnInit(): void {
    //this.employees = this._employeeService.getEmployees();
    this._employeeService.getEmployees().subscribe({
      next: data=>this.employees=data, 
      error: error=> {this.employees=[]; console.log(error.message)}})
    
  }

  
}
