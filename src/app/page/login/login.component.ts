import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signUpFlag:boolean;
  constructor(private router:Router) { 
    this.signUpFlag=false;
  }

  ngOnInit(): void {
  }
    
  handleSignUp(){
    this.signUpFlag=true;
  }

  handleSignIn(){
    this.signUpFlag=false;
  }

  signIn(){
    this.router.navigateByUrl('home')
  }
}
