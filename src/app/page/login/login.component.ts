import { Component, NgZone, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signUpFlag:boolean;
  email:string;
  password:string
  passwordRepeat:string
  user:any;

  constructor(private spinner: NgxSpinnerService, private login:LoginService) { 
    this.signUpFlag=false;
    this.email='';
    this.password='';
    this.passwordRepeat='';
  }
  
  ngOnInit(): void {
  }
    
  handleSignUp(){
    this.resetFields();
    this.signUpFlag=true;
  }

  handleSignIn(){
    this.resetFields();
    this.signUpFlag=false;
  }

  resetFields(){
    this.email='';
    this.password='';
    this.passwordRepeat='';
  }

  signIn() {
    this.login.signIn(this.email, this.password);
  }
  
  signUp() {
    this.login.signUp(this.email,this.password, this.passwordRepeat);
  }

  fastSignIn(user:string){
    this.email = user+"@gmail.com";
    this.password="123456";
  }

}
