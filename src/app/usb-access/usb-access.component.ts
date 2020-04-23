import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsbRequest } from '../model/usb-request';
import { UsbaccessService } from '../services/usbaccess.service';

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
  usbAccessReq : UsbRequest;
  message = '';

  constructor(private usbaccessserviceobj : UsbaccessService) { }

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
    if(this.usbaccessForm.invalid){
      return;
    }
    else{
      var date = new Date();
      this.usbAccessReq.reqNo = '';
      this.usbAccessReq.reqSrNo = 0;
      this.usbAccessReq.processId= '';
      this.usbAccessReq.reqBy= '';
      this.usbAccessReq.accessType= this.usbaccessForm.value.accessfor;
      this.usbAccessReq.accessDate = this.usbaccessForm.value.datepick;
      this.usbAccessReq.noofDays= 1;
      this.usbAccessReq.reqDate= date;
      this.usbAccessReq.reqTime = date.toLocaleTimeString();
      this.usbAccessReq.workflowId = '';

      this.usbaccessserviceobj.postUsbAccessReq(this.usbAccessReq).subscribe(
        (data: UsbRequest) => { 
          console.log('On Success')
          this.message = "Request submitted successfully"
          console.log(data);
        },
        (error: any) => {
          console.log('on error')
          this.message = "Error: " + error.statusText + error.message;
          console.log(error);
        }
      );
    }
    console.warn(this.usbaccessForm.value);
  }
}
