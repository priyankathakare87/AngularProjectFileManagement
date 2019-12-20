import { Component, OnInit, ViewChild } from '@angular/core';
import { MyAssetService } from '../../services/my-asset.service';
import { MyAsset } from '../../model/myAsset';
import { AgGridAngular } from 'ag-grid-angular';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}
/*
const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];
*/

const assets : MyAsset[] =
[
  {'type':'desktop', 'model':'Dell 780','no':'SCI/09/500001796','useBy':'Self'},
  {'type':'desktop', 'model':'Dell 360','no':'SCI/09/500001593','useBy':'Vendor'},
  {'type':'Printer', 'model':'HP 5622','no':'SCI/09/600000326','useBy':'Self'},
  {'type':'SAP', 'model':'BO License','no':'SCI/45/4545','useBy':'Self'}
]




@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.css']
})
export class CancelComponent implements OnInit {
  @ViewChild('agGrid', { static: true }) agGrid: AgGridAngular;
  //countries = COUNTRIES;

  public myAssets;// = assets;

  columnDefs = [
    {
      headerName: 'Asset Type',
      field: 'type',
      sortable: true,
      filter: true,
      checkboxSelection: true
    },
    { headerName: 'Model', field: 'model', sortable: true, filter: true },
    { headerName: 'Asset Number', field: 'no', sortable: true, filter: true },
    { headerName: 'Used By', field: 'useBy', sortable: true, filter: true }
  ];

  rowData = [];
  constructor(private myAsset: MyAssetService) {}

  ngOnInit() {
    //this.rowData = this.myAssets;
    // this.myAsset.getMyAssets()
    //    .subscribe(data => this.myAssets = data);

    this.rowData = this.myAsset.getMyAssetsNormal();
    //console.log("data from node " + this.rowData + 'dsfsdfs');
  }

  onSelect(event, selectedAsset) {
    //console.log(selectedAsset);
    //console.log(event);
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
