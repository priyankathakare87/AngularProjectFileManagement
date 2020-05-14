import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTable } from '@angular/material';
import { AddrowUatComponent } from '../addrow-uat/addrow-uat.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface UsersData {
  id: number;
  tcode: string;
  stepsforexecution: string;
  expectedresult: string;
  outputresult: string;
  status: string;
}
interface forMatSelect {
  value: string;
  viewValue: string;
}
const ELEMENT_DATA: UsersData[] = [
  { id: 0, tcode: '', stepsforexecution: '', expectedresult: '', outputresult: '', status: ''},
  //  {id: 1560608769632, tcode: 'Artificial Intelligence', stepsforexecution: 'abcdFinally, once you have defined your columns, you need to tell the table which columns will be rendered in the header and data rows. To start, create a variable in your component that contains the list of the columns you want to render.', expectedresult: 'sjrbguebobsjvs', outputresult: 'irgheuhgoiebvodfnov', status: 'OK'},
  //  {id: 1560608796014, tcode: 'Machine Learning', stepsforexecution: 'abcd', expectedresult: 'sjrbguebobsjvs', outputresult: 'irgheuhgoiebvodfnov', status: 'OK'},
  //  {id: 1560608787815, tcode: 'Robotic Process Automation', stepsforexecution: 'abcd', expectedresult: 'sjrbguebobsjvs', outputresult: 'irgheuhgoiebvodfnov', status: 'OK'},
  //  {id: 1560608805101, tcode: 'Blockchain', stepsforexecution: 'abcd', expectedresult: 'sjrbguebobsjvs', outputresult: 'irgheuhgoiebvodfnov', status: 'OK'}
];

@Component({
  selector: 'app-submit-uat',
  templateUrl: './submit-uat.component.html',
  styleUrls: ['./submit-uat.component.css']
})

export class SubmitUatComponent implements OnInit {
  displayedColumns: string[] = ['id', 'tcode', 'stepsforexecution', 'expectedresult', 'outputresult', 'status', 'action'];
  dataSource = ELEMENT_DATA;

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
  uatstatus: forMatSelect[] = [
    {value: 'pass', viewValue: 'Passed'},
    {value: 'fail', viewValue: 'Failed'},
  ];

  public createcrForm: FormGroup = new FormGroup({
    ticketno: new FormControl( null, Validators.required),
    component: new FormControl(null, Validators.required),
    priority: new FormControl(null,Validators.required),
    raisedOn: new FormControl(null, Validators.required),
    uatstaus: new FormControl(null, Validators.required),
    failurereason: new FormControl(null, Validators.required),
    actiontobetaken: new FormControl(null, Validators.required)
  });
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(AddrowUatComponent, {
      width: '500px',
      height: '300px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }
    addRowData(row_obj){
      var d = new Date();
      this.dataSource.push({
        id:d.getTime(),
        tcode:row_obj.tcode,
        stepsforexecution:row_obj.stepsforexecution,
        outputresult:row_obj.outputresult,
        expectedresult:row_obj.expectedresult,
        status:row_obj.status
      });
      this.table.renderRows();
      
    }
    updateRowData(row_obj){
      this.dataSource = this.dataSource.filter((value,key)=>{
        if(value.id == row_obj.id){
          value.tcode = row_obj.tcode;
          value.stepsforexecution = row_obj.stepsforexecution;
          value.expectedresult = row_obj.expectedresult;
          value.outputresult = row_obj.outputresult;
          value.status = row_obj.status;
        }
        return true;
      });
    }
    deleteRowData(row_obj){
      this.dataSource = this.dataSource.filter((value,key)=>{
        return value.id != row_obj.id;
      });
    }
  }

