import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-new',
  templateUrl: './header-new.component.html',
  styleUrls: ['./header-new.component.css']
})
export class HeaderNewComponent implements OnInit {
  navbarOpen = false;
  imageSrc = 'assets/images/logo_resize.jpg';
  isNavbarCollapsed = true;
  constructor() { }

  ngOnInit() {
  }
  toggleNavbar() {
  this.navbarOpen = !this.navbarOpen;
}
}
