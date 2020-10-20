import { Component } from '@angular/core';
import {ExpenseService} from './expenses/ExpenseService';
import IExpense from './expenses/expense';

@Component({
  selector: 'app-root',
  template: `
  <button (click)="GetList()">List Exp</button>  
  <table class="table">  
  <thead class="thead-dark">
    <tr>
      <th>Description</th>
      <th>Date</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let expense of temp">
      <td>{{ expense.description }}</td>
      <td>{{ expense.date }}</td>
      <td>{{ expense.amount}}</td>
      </tr>
  </tbody>
  </table>`
})
export class AppComponent {
  temp: IExpense[];
  constructor(private ex: ExpenseService )
  {

  }
  GetList()
   {
     this.ex.getExpenses().subscribe(t=>{
       this.temp=t;
       console.log(t);
     })
   }
}
