import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { SharedfolderRequest } from '../model/sharedfolder-request';
import { SharedfolderService } from '../services/sharedfolder.service';

interface User {
  value: string;
  viewValue: string;
}

interface Access{
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-sharedfolder',
  templateUrl: './sharedfolder.component.html',
  styleUrls: ['./sharedfolder.component.css']
})
export class SharedfolderComponent implements OnInit {
  users: User[] = [
    {value: 'self', viewValue: 'Self'},
    {value: 'vendor', viewValue: 'Vendor'},
    {value: 'auditor', viewValue: 'Auditors'}
  ];

  accessType: Access[] = [
    {value: 1, viewValue: 'Read Only'},
    {value: 2, viewValue: 'Read / Write'}
  ];
  private sharedfolderaccessreq : SharedfolderRequest;
  message= '';
  constructor(private sharedfolderaccessservice : SharedfolderService) { }

  ngOnInit() {
  }

  sharedfolderForm = new FormGroup({
    usedBy: new FormControl('', Validators.required),
    ad: new FormControl('', [Validators.required, Validators.pattern('^\\d*$')]),
    typeofAccess: new FormControl('', Validators.required),
    sharedfolderName: new FormControl('', Validators.required),
    reason: new FormControl('', Validators.required),
  }); 
  
  onSubmit(){
    if(this.sharedfolderForm.invalid){
      return;
    }
    else{
      var date = new Date();
      this.sharedfolderaccessreq.reqNo = '';
      this.sharedfolderaccessreq.reqSrNo = 0;
      this.sharedfolderaccessreq.processId= '';
      this.sharedfolderaccessreq.reqBy= '';
      this.sharedfolderaccessreq.useBy= '';
      this.sharedfolderaccessreq.userAd= this.sharedfolderForm.value.ad;
      this.sharedfolderaccessreq.accessType= this.sharedfolderForm.value.typeofAccess;
      this.sharedfolderaccessreq.folder_name= this.sharedfolderForm.value.sharedfolderName;
      this.sharedfolderaccessreq.reason= this.sharedfolderForm.value.reason;
      this.sharedfolderaccessreq.reqDate= date;
      this.sharedfolderaccessreq.reqTime = date.toLocaleTimeString();
      this.sharedfolderaccessreq.workflowId = '';
      this.sharedfolderaccessservice.postSharedFolderAccessReq(this.sharedfolderaccessreq).subscribe(
        (data: SharedfolderRequest) => { 
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
    console.warn(this.sharedfolderForm.value);
  }
  change(){
    console.log('in change');
  }
}
