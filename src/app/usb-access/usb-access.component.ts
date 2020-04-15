import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usb-access',
  templateUrl: './usb-access.component.html',
  styleUrls: ['./usb-access.component.css']
})
export class UsbAccessComponent implements OnInit {
  accessList: string[] = ['USB', 'DVD'];

  usbaccessform: FormGroup = new FormGroup({
    accessfor: new FormControl(),
    date: new FormControl(new Date()),
    reason: new FormControl(),
  });

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    // TODO: Use EventEmitter with form value
    console.warn(this.usbaccessform.value);
  }
}
