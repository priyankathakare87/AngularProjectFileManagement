import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface user {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-hardsoft',
  templateUrl: './hardsoft.component.html',
  styleUrls: ['./hardsoft.component.css']
})
export class HardsoftComponent implements OnInit {

  users: user[] = [
    {value: 'self', viewValue: 'Self' },
    {value: 'vendor', viewValue: 'Vendor'},
    {value: 'auditor', viewValue: 'Auditors'}
  ];

  public hardwares = [ 'Desktop', 'Monitor', 'Printer', 'Scanner', 'Laptop'];
  public softwares = [ 'SAP', 'Afsys', 'Danaos', 'Lotus Notes', 'MS Office'];
  public assets = this.hardwares.slice();

  public hardsoftForm: FormGroup = new FormGroup({
    useBy: new FormControl( null, Validators.required),
    assetCat: new FormControl(null, Validators.required),
    asset: new FormControl(null, Validators.required),
    quantity: new FormControl(1, [Validators.required, Validators.min(1)]),
    reason: new FormControl(null, [Validators.required, Validators.minLength(5)])
  });

  constructor() { }

  ngOnInit() {
    console.log(this.assets);
  }

  get useBy() { return this.hardsoftForm.get('useBy'); }
  get assetCat() { return this.hardsoftForm.get('assetCat'); }
  get asset() { return this.hardsoftForm.get('asset'); }
  get quantity() { return this.hardsoftForm.get('quantity'); }
  get reason() { return this.hardsoftForm.get('reason'); }

  selecthardwares() { this.assets = this.hardwares.slice(); }
  selectsoftwares() { this.assets = this.softwares.slice(); }

}
