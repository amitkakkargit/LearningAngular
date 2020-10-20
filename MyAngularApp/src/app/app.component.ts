import { Component } from '@angular/core';
import { Employee } from "./Model/Employee";
import { EmployeeService } from "./Service/EmployeeService";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-root',
  template:`
  <button (click)="Details()">Details</button>

  Employee ID: {{emp.EmpId}} 
  Employee Name: {{emp.EmpName}}
  `,
  providers:[EmployeeService]
})
export class AppComponent {
  title = 'MyAngularApp';
  emp:Employee;  
  constructor(private temp:EmployeeService)
  {
  }
  Details()
  {
    this.emp=this.temp.EmployeeDetails();
  }
}
