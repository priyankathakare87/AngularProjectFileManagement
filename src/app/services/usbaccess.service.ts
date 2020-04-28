import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { UsbRequest } from '../model/usb-request';
import { PostResponse } from '../model/post-response';

@Injectable({
  providedIn: 'root'
})
export class UsbaccessService {
  private url = 'http://10.20.11.46:3000/post_usbaccessreq';

  constructor(private http: HttpClient) { }

  postUsbAccessReq(usbreqobj: UsbRequest): Observable<PostResponse>  {
    //console.log(asset)
    return this.http.post<PostResponse>(this.url, usbreqobj);
  }
 }
