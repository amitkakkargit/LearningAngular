import { Component, ViewChild } from '@angular/core';
import { EmployeeComponent } from './Employee.component';

@Component({
  selector: 'app-root',
  template:`
  <app-Employee></app-Employee>
  <div>Function From Child component: {{this.phoneNumber}}</div>
  `
})
export class AppComponent {
  @ViewChild(EmployeeComponent) obj:EmployeeComponent;
  phoneNumber: number;
  constructor()
  {
    this.obj = new EmployeeComponent();
    this.phoneNumber = this.obj.getPhone();
  }
}
