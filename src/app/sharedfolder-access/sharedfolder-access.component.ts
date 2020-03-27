import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface user {
  value: string;
  viewValue: string;
}
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-sharedfolder-access',
  templateUrl: './sharedfolder-access.component.html',
  styleUrls: ['./sharedfolder-access.component.css']
})

export class SharedfolderAccessComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  users: user[] = [
    {value: 'self', viewValue: 'Self'},
    {value: 'vendor', viewValue: 'Vendor'},
    {value: 'auditor', viewValue: 'Auditors'}
  ];
  constructor() { }

  ngOnInit() {
  }

  public accesstype = [ 'Read Only', 'Read / Write'];
  public accesses = this.accesstype.slice();

  public sharedfolderForm: FormGroup = new FormGroup({
    usedBy: new FormControl(null, Validators.required),
    typeofAccess: new FormControl(null, Validators.required),
    sharedfolderName: new FormControl(null, Validators.required),
    reason: new FormControl(null, [Validators.required, Validators.minLength(5)])
  });
  onSubmit(){}
}
