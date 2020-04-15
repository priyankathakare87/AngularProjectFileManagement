import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-usb-access',
  templateUrl: './usb-access.component.html',
  styleUrls: ['./usb-access.component.css']
})
export class UsbAccessComponent implements OnInit {
  accessfor = new FormControl();
  accessList: string[] = ['USB', 'DVD'];
  constructor() { }

  ngOnInit() {
  }

}
