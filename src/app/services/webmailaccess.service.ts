import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { WebmailRequest } from '../model/webmail-request';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebmailaccessService {

  private url = 'http://10.20.11.46:3000/post_webmailreq';

  constructor(private http: HttpClient) { }

  postWebmailReq(webmailreqobj: WebmailRequest): Observable<WebmailRequest>  {
    //console.log(asset)
    return this.http.post<WebmailRequest>(this.url, webmailreqobj);
  } 
}
