import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

export interface PeriodicElement {
  position: number;
  id: string;
  description: string;
  raisedBy: string;
  raisedOn: string;
}

export interface DialogData{
  description: string;
  riasedBy: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, id: '5456225', description: 'Desktop', raisedBy: 'Amarendra', raisedOn: '01.02.2020'},
  {position: 2, id: '6386524', description: 'Change Request', raisedBy: 'Priyamvad', raisedOn: '31.12.2020'},
  {position: 3, id: '8985854', description: 'USB Access', raisedBy: 'Priyanka', raisedOn: '22.12.2019'},
  {position: 4, id: '2335648', description: 'ShareFolder', raisedBy: 'Debopam', raisedOn: '18.05.2020'},
  {position: 5, id: '4556832', description: 'Laptop', raisedBy: 'Shikha', raisedOn: '01.03.2020'},      
];


@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns : string[] = ['position', 'id','description','raisedBy','raisedOn','details'];
  dataSource = ELEMENT_DATA;
  
  public redirectToDetails = () => {
/*
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width : '250px',
      data : { description: 'desktop', raisedBy: 'Amarendra' }
    });
    
    dialogRef.afterClosed().subscribe(
      result => { 

      }
    )
    */
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  /*onNoClick(): void {
    this.dialogRef.close();
  }*/

}