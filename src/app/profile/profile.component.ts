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
  public userData: EmployeeData;
  constructor( private route: ActivatedRoute, private loginService: LoginService) { }

  ngOnInit() {
    // this.loginService.$loggedInUserData
    // .subscribe((resposedata: EmployeeData) => {
    //   this.userData = resposedata;
    // });

     this.userData = this.loginService.getUser();
    // console.log("profile",this.userData)

  }
}
