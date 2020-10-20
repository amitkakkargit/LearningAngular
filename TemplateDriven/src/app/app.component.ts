import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <form #emp="ngForm" (ngSubmit)="Register(emp)">
    <div>
      <label> Employee Code: </label>
      <input type="text" name="ecode" ngModel>
    </div>
    <div>
      <label> Employee Name: </label>
      <input type="text" name="ename" ngModel>
    </div>
    <div>
      <input type="submit" value="Register">
    </div>
  </form>  
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  Register(temp:any)
  {    
    console.log(temp.value);
  }
}
