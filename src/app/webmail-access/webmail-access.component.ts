import { Component, OnInit } from '@angular/core';
import { WebmailRequest } from '../model/webmail-request';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { WebmailaccessService } from '../services/webmailaccess.service';

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
  message = '';
  constructor(private webmailAccessService: WebmailaccessService) { }

  ngOnInit() {
  }

  public webmailAccessReq: WebmailRequest;
  
  get f(){ return this.webmailaccessForm.controls; }

  onSubmit() {
    this.formsubmitted = true;
    if(this.webmailaccessForm.invalid){
      return;
    }
    else{
      var date = new Date();
      this.webmailAccessReq.reqNo = '';
      this.webmailAccessReq.reqSrNo = 0;
      this.webmailAccessReq.processId = '';
      this.webmailAccessReq.reqBy = ''; //to be taken from user emp code logged in
      this.webmailAccessReq.emailId = this.webmailaccessForm.value.currentEmailID;
      this.webmailAccessReq.reqDate = date;
      this.webmailAccessReq.reqTime = date.toLocaleTimeString();
      this.webmailAccessReq.workflowId = '';
      
      this.webmailAccessService.postWebmailReq(this.webmailAccessReq).subscribe(
        (data: WebmailRequest) => { 
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
      console.warn(this.webmailAccessReq);
      alert('Success!')
    }
    
  }
}
