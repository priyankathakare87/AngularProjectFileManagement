import { Component, OnInit } from '@angular/core';
import { Routes, ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login.service';
import { EmployeeData } from '../model/employee-data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData: EmployeeData;
  constructor( private route: ActivatedRoute, private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.$loggedInUserData
    .subscribe((resposedata: EmployeeData) => {
      this.userData = resposedata;
    });
  }
}
