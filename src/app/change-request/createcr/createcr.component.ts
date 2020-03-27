import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-createcr',
  templateUrl: './createcr.component.html',
  styleUrls: ['./createcr.component.css']
})
export class CreatecrComponent implements OnInit {

  public createcrForm: FormGroup = new FormGroup({
    ticket: new FormControl( null, Validators.required),
    crType: new FormControl(null, Validators.required),
    component: new FormControl(null,null),
    priority: new FormControl(null,null),
    raisedOn: new FormControl(null,null),
    existingProcess: new FormControl(null, Validators.required),
    desiredProcess: new FormControl(null, Validators.required)
  });
  constructor() { }

  ngOnInit() {
  }

}
