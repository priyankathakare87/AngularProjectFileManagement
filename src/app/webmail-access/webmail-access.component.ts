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
      var date = new Date();
      this.webmailAccessReq.reqNo = 'WA1';
      this.webmailAccessReq.reqSrNo = 12;
      this.webmailAccessReq.processId = 'W12';
      this.webmailAccessReq.reqBy = '4679'; //to be taken from user emp code logged in
      this.webmailAccessReq.emailId = this.webmailaccessForm.value.currentEmailID;
      this.webmailAccessReq.reqDate = date;
      this.webmailAccessReq.reqTime = date.toLocaleTimeString();
      this.webmailAccessReq.workflowId = 'WF02';

      console.warn(this.webmailAccessReq);
      alert('Success!')
    }
    
  }
}
