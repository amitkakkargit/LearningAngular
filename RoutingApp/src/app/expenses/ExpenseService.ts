import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import IExpense from "./expense";

@Injectable({
    providedIn: "root"
})
export class ExpenseService {
    private url = "api/expenses.json";
    constructor(private http: HttpClient)
    {

    }
    getExpenses(): Observable<IExpense[]>
    {
       return this.http.get<IExpense[]>(this.url);
    }
}