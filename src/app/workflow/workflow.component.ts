import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { WorkFlowDialogComponent } from './workflow-dialog.component'

export interface PeriodicElement {
  position: number;
  id: string;
  description: string;
  raisedBy: string;
  raisedOn: string;
  icon: string;
}

export interface DialogData{
  description: string;
  riasedBy: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, id: '5456225', description: 'Desktop', raisedBy: 'Amarendra', raisedOn: '01.02.2020', icon : 'reorder'},
  {position: 2, id: '6386524', description: 'Change Request', raisedBy: 'Priyamvad', raisedOn: '31.12.2020', icon : 'reorder'},
  {position: 3, id: '8985854', description: 'USB Access', raisedBy: 'Priyanka', raisedOn: '22.12.2019', icon : 'reorder'},
  {position: 4, id: '2335648', description: 'ShareFolder', raisedBy: 'Debopam', raisedOn: '18.05.2020', icon : 'reorder'},
  {position: 5, id: '4556832', description: 'Laptop', raisedBy: 'Shikha', raisedOn: '01.03.2020', icon : 'reorder'},      
];


//workFlowDialogRef: MatDialogRef<WorkFlowDialogComponent>;


@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})


export class WorkflowComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

data : { id: string,
         name :string, 
         for: string
         
}  
  comments : string;
  action: string;

  workFlowDialogRef : MatDialogRef<WorkFlowDialogComponent>;

  ngOnInit() {
  }

  displayedColumns : string[] = ['position', 'id','description','raisedBy','raisedOn','details'];
  dataSource = ELEMENT_DATA;
  
  redirectToDetails(element) {
   
   this.data = { id : element.id,
                       name : element.raisedBy,
                       for: element. description }



  this.workFlowDialogRef = this.dialog.open(WorkFlowDialogComponent, 
    {
      hasBackdrop : true,
      data : this.data
    });  

   this.workFlowDialogRef.afterClosed()
          .subscribe(
              result => { 
                console.log('The dialog is closed');
                this.comments = result.comments;
                this.action = result.action;
                console.log(result);
                if (this.action == 'A'){
                   element.icon = 'check_circle'
                  }
                else if (this.action == 'R') {
                  element.icon = 'cancel'
                }
                // icon = cancel for rejection
              }
            ) 
 
  }

}

