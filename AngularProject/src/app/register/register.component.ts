import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validator} from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from '../service/service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  fb:FormGroup;
  constructor(private objB:FormBuilder,private MyRoute:Router,private MyS:Service)
  {
    this.fb = this.objB.group({
      'username':'',
      'password':'',
      'age':0
    })
  }
  SignUp(temp)
  {
    //will call the endpoint of webapi to save the record,otherwise popup the message,user already exist.
    
    this.MyS.Register(temp).subscribe(data=>{
       console.log('saved');
    },err=>{
       console.log('unable to saved');
    })
    this.MyRoute.navigate(['/Login']);
    console.log(temp);
  }
}
