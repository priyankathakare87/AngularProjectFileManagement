import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usb-access',
  templateUrl: './usb-access.component.html',
  styleUrls: ['./usb-access.component.css']
})
export class UsbAccessComponent implements OnInit {

  usbaccessForm = new FormGroup({
    accessfor: new FormControl('', Validators.required),
    datepick: new FormControl('', Validators.required),
    reason: new FormControl('', Validators.required),
  });

  accessList: string[] = ['USB', 'DVD'];

  constructor() { }

  ngOnInit() {
  }

  /* Conver date object to string */
  date(e) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.usbaccessForm.get('datepick').setValue(convertDate, {
      onlyself: true
    })
  }

  onSubmit(){
    // TODO: Use EventEmitter with form value
    console.warn(this.usbaccessForm.value);
  }
}
