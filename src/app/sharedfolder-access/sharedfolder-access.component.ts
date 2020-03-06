import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
export interface user {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-sharedfolder-access',
  templateUrl: './sharedfolder-access.component.html',
  styleUrls: ['./sharedfolder-access.component.css']
})
export class SharedfolderAccessComponent implements OnInit {

    accesstype = new FormControl();
    accesstypeList: string[] = ['Read Only', 'Read / Write both'];
    public fieldArray: Array<any> = [];
    public newAttribute: any = {};

    addFieldValue() {
        this.fieldArray.push(this.newAttribute);
        this.newAttribute = {};

    }

    deleteFieldValue(index) {
        this.fieldArray.splice(index, 1);
    }
    self()
    {}
    others(){

    }
    onSubmit(){ }
    constructor() { }

  ngOnInit() {
  }

}
