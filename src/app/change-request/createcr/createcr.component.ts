import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateCr } from '../../model/create-cr';
import { CreatecrService } from '../../services/createcr.service';

interface forMatSelect {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-createcr',
  templateUrl: './createcr.component.html',
  styleUrls: ['./createcr.component.css']
})
export class CreatecrComponent implements OnInit {
  maxDate;
  createcrReq: CreateCr;
  message='';
  prioritylist: forMatSelect[] = [
    {value: 'low', viewValue: 'Low'},
    {value: 'medium', viewValue: 'Medium'},
    {value: 'high', viewValue: 'High'},
    {value: 'veryhigh', viewValue: 'Very High'}
  ];
  componentList: forMatSelect[] = [
    {value: 'FI', viewValue: 'FI'},
    {value: 'MM', viewValue: 'MM'},
    {value: 'HCM', viewValue: 'HCM'},
    {value: 'SRM', viewValue: 'SRM'},
    {value: 'MDM', viewValue: 'MDM'}
  ];
  types: forMatSelect[] = [
    {value: 'cr', viewValue: 'Change Request'},
    {value: 'bf', viewValue: 'Bug Fixing'},
  ];
  public createcrForm: FormGroup = new FormGroup({
    ticketno: new FormControl( null, Validators.required),
    component: new FormControl(null, Validators.required),
    priority: new FormControl(null,Validators.required),
    raisedOn: new FormControl(null, Validators.required),
    crType: new FormControl(null, Validators.required),
    existingProcess: new FormControl(null, Validators.required),
    proposedProcess: new FormControl(null, Validators.required)
  });
  constructor(private createcrserviceobj: CreatecrService) { }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() - 1);  }
  onSubmit(){
    if(this.createcrForm.invalid){
      return;
    }
      this.createcrReq.crNo = '';
      this.createcrReq.crSerialNo = 0;
      this.createcrReq.reqBy= '';
      this.createcrReq.ticketNo= this.createcrForm.value.ticketno;
      this.createcrReq.component= this.createcrForm.value.component;
      this.createcrReq.priority= this.createcrForm.value.priority;
      this.createcrReq.raisedon = this.createcrForm.value.raisedOn;
      this.createcrReq.crType= this.createcrForm.value.crType;
      this.createcrReq.existingProcess= this.createcrForm.value.existingProcess;
      this.createcrReq.proposedProcess = this.createcrForm.value.proposedProcess;

      this.createcrserviceobj.postCreateCR(this.createcrReq).subscribe(
        (data: CreateCr) => { 
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
    console.warn(this.createcrForm.value);
  }
}
