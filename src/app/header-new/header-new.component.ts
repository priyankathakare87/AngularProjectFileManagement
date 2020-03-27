import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'

@Component({
  selector: 'app-header-new',
  templateUrl: './header-new.component.html',
  styleUrls: ['./header-new.component.css']
})
export class HeaderNewComponent implements OnInit {

  empname : string = "";
  navbarOpen = false;
  imageSrc = 'assets/images/logo_resize.jpg';
  isNavbarCollapsed = true;
  constructor(private login: LoginService) { 
    
  }

  ngOnInit() {
   this.empname = localStorage.getItem("token");
  }
  toggleNavbar() {
  this.navbarOpen = !this.navbarOpen;
}

logoutUser(){

  localStorage.removeItem("token");
  console.log("logout")
}
}
