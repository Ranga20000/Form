import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github1';
  PresentAddress:any="";
  PermanentAddress:any="";
  City:any="";
  State:any="";
  Pincode:string="";
  Password:any="";
  Email:any="";
 
users:any={};
  formValidation: any;
  signupForm: any;

  Onsubmit(){

  }

}

