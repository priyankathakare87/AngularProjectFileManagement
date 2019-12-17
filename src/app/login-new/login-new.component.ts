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
  constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.required],
      pass: ['', Validators.required]});
  }

  login() {
    this.credentials = Object.assign({}, this.loginForm.value);
    this.loginService.getAuthentication(this.credentials);
    this.router.navigate(['profile']);
  }

}
