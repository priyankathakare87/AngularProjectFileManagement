import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeData } from '../model/employee-data';
import { Login } from '../model/login';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-new',
  templateUrl: './login-new.component.html',
  styleUrls: ['./login-new.component.css']
})
export class LoginNewComponent implements OnInit {
  loginForm: FormGroup;
  userData: EmployeeData;
  credentials: Login;
  public authMessage: string;
  constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.required],
      pass: ['', Validators.required]});
  }

  login() {
    
    this.loginService.setUserId(this.loginForm.value.user);
    this.credentials = Object.assign({}, this.loginForm.value);
    this.loginService.getAuthentication(this.credentials);
    this.loginService.userAuthentication(this.credentials);
    //this.router.navigate(['profile']);
    /*this.loginService.userAuthentication(this.credentials)
    .subscribe(message => {
            this.authMessage = message
            console.log ("message from service" + this.authMessage);
    }
    );
    */
    
    /*if (this.authMessage == 'success'){
      this.router.navigate(['profile']);
    }
    else {
      window.alert ("Invalid userid or password");
    }
    */

   }
 

}
