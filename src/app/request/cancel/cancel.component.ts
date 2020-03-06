import { Component, OnInit, ViewChild } from '@angular/core';
import { MyAssetService } from '../../services/my-asset.service';
import { MyAsset } from '../../model/myAsset';
import { AgGridAngular } from 'ag-grid-angular';
import { ConditionPosition } from 'ag-grid-community/dist/lib/filter/provided/simpleFilter';


const assets: MyAsset[] =
[
  {type: 'desktop', model: 'Dell 780', no: 'SCI/09/500001796', useBy: 'Self'},
  {type: 'desktop', model: 'Dell 360', no: 'SCI/09/500001593', useBy: 'Vendor'},
  {type: 'Printer', model: 'HP 5622', no: 'SCI/09/600000326', useBy: 'Self'},
  {type: 'SAP', model: 'BO License', no: 'SCI/45/4545', useBy: 'Self'}
];




@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {
  @ViewChild('agGrid', { static: true }) agGrid: AgGridAngular;
  // countries = COUNTRIES;

  public myAssets; // = assets;

  columnDefs = [
    { headerName: 'Asset Type', field: 'type', sortable: true, filter: true, checkboxSelection: true },
    { headerName: 'Model', field: 'model', sortable: true, filter: true },
    { headerName: 'Asset Number', field: 'no', sortable: true, filter: true },
    { headerName: 'Used By', field: 'useBy', sortable: true, filter: true }
  ];

  rowData = [];
  constructor(private myAsset: MyAssetService) {}

  ngOnInit() {
    // this.rowData = this.myAssets;
    // this.myAsset.getMyAssets()
    //    .subscribe(data => this.myAssets = data);

    this.rowData = this.myAsset.getMyAssetsNormal();
    //console.log(this.rowData);
    // console.log("data from node " + this.rowData + 'dsfsdfs');
  }

  onSelect(event, selectedAsset) {
    // console.log(selectedAsset);
    // console.log(event);
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData
      .map(node => node.type + ' ' + node.model)
      .join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }
}
