import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-Employee',
    template:`
    <div></div>    
    `
  })
export class EmployeeComponent
{
    getPhone(): number{
        return 123456;
    }    
}