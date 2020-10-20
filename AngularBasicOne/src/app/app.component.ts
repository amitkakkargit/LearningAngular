import { Component } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validator} from '@angular/forms'

@Component({
  selector: 'app-root',
  template: `
  <form [formGroup]="frmGroup" (ngSubmit)="RegisterUser(frmGroup.value)">
    <div>
          <label>User Name:</label>          
          <input  type="text" [formControl]="frmGroup.controls['UserName']">
    </div>
    <div>
          <label>Password:</label>          
          <input  type="text" [formControl]="frmGroup.controls['Password']">
    </div>
    <div>
          <label>Age:</label>          
          <input  type="text" [formControl]="frmGroup.controls['Age']">
    </div>
    <div>          
          <input  type="submit" value="Register">
    </div>
  </form>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  frmGroup:FormGroup;

  constructor (private frmBuilder:FormBuilder)
  {
    this.frmGroup = this.frmBuilder.group({
      'UserName':'',
      'Password':'',
      'Age':0
    });
  }

  RegisterUser(temp:any)
  {
      console.log(temp);
  }
}
