import { Component, OnInit, Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../services/login.service';
import { Login } from '../model/login';
import { EmployeeData } from '../model/employee-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userData: EmployeeData;
  credentials: Login;

  constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder, private loginService: LoginService){ }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.required],
      pass: ['', Validators.required]});
    }

    get formControls() { return this.loginForm.controls; }

    login() {
      this.credentials = Object.assign({}, this.loginForm.value);
      // const observ = this.loginService.getUserProfile(this.credentials);
      // observ.subscribe((resposedata: EmployeeData) => {
      // this.userData = resposedata;
      //console.log(this.userData.HOD_Name);
      this.loginService.getAuthentication(this.credentials);
      this.router.navigate(['profile']);
    }
  }
