import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder,FormGroup} from '@angular/forms';
import { Service } from '../service/service';
import { membership } from '../service/membership';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {

   fb:FormGroup;
   mess:string='';

  constructor(private objB:FormBuilder,private MyRoute:Router,private objs:Service)
  {
    this.fb = this.objB.group({
      'username':'',
      'password':'',
      'age':0
    })
  }  

  ngOnInit() {
  }

  SignIn(temp:membership){

     this.objs.Login(temp).subscribe(res=>{
        var t=res;
        if(t==true)
        {
          var u=temp.username;
          sessionStorage.setItem("username",u);
          this.MyRoute.navigate(['/Home']);
        }
        else
        {
          this.mess="invalid username or password";
        } 
     },err=>{
       console.log(err);
     })
  }
}