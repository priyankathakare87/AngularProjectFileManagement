import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { UsbRequest } from '../model/usb-request';

@Injectable({
  providedIn: 'root'
})
export class UsbaccessService {
  private url = 'http://10.20.11.46:3000/post_usbaccessreq';

  constructor(private http: HttpClient) { }

  postUsbAccessReq(usbreqobj: UsbRequest): Observable<UsbRequest>  {
    //console.log(asset)
    return this.http.post<UsbRequest>(this.url, usbreqobj);
  } }
