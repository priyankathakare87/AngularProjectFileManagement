import { Component, OnInit } from '@angular/core';
import { WebmailRequest } from '../model/webmail-request';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-webmail-access',
  templateUrl: './webmail-access.component.html',
  styleUrls: ['./webmail-access.component.css']
})
export class WebmailAccessComponent implements OnInit {

  webmailaccessForm = new FormGroup({
    currentEmailID: new FormControl('', [Validators.required, Validators.email]),
  });
  
  formsubmitted = false;

  constructor() { }

  ngOnInit() {
  }

  public webmailAccessReq: WebmailRequest = {
    reqNo : 'WA1',
    reqSrNo: 12,
    processId: 'W32',
    reqBy: '4679',
    emailId: 'priyanka.thakare@sci.co.in',
    reqDate: null,
    reqTime: null,
    workflowId: 'abc123'
  };
  
  get f(){ return this.webmailaccessForm.controls; }

  onSubmit() {
    this.formsubmitted = true;
    if(this.webmailaccessForm.invalid){
      return;
    }
    else{
      // TODO: Use EventEmitter with form value
    console.warn(this.webmailaccessForm.value);
    alert('Success!')
    }
    
  }
}
