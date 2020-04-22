import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

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

  constructor() { }

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
    // TODO: Use EventEmitter with form value
    console.warn(this.sharedfolderForm.value);
  }
  change(){
    console.log('in change');
  }
}
