import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { membership } from './membership';

@Injectable()
export class Service
{
   //  const url="https://localhost:5001/api/values";

  constructor(private obj:HttpClient)
  {
  }

  Register(emp:membership):Observable<any>
  {
     const headers = new HttpHeaders().set('content-type', 'application/json');  
     var body = {  
       username: emp.username,password: emp.password,age:emp.age  
     }  
       return  this.obj.post("http://localhost:5000/values",body,{headers});
  }

  Login(emp:membership):Observable<any>{
    const headers = new HttpHeaders().set('content-type', 'application/json');  
    var body = {  
      username: emp.username,password: emp.password  
    }  
    return this.obj.post("http://localhost:5000/values/login",body,{headers});
  }

  loggedIn():string 
  {
      return sessionStorage.getItem('username');
  }

}