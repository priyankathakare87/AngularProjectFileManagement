import { Injectable } from '@angular/core';
import { MyAsset } from '../model/myAsset';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { observable, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class MyAssetService {

  private url = 'http://10.20.11.46:3000/angular_myAsset';
  public abc = [];
  myassetnormal: any;
  constructor(private http: HttpClient) { }

  getMyAssets(): Observable<MyAsset[]> {
  return this.http.get<MyAsset[]>(this.url);
   }

  getMyAssetsNormal(){
    this.myassetnormal = this.http.get(this.url);
    return this.myassetnormal;
  }


}
