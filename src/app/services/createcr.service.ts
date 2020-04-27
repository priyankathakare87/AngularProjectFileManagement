import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { CreateCr } from '../model/create-cr';

@Injectable({
  providedIn: 'root'
})
export class CreatecrService {
  private url = 'http://10.20.11.46:3000/post_usbaccessreq';
  constructor(private http: HttpClient) { }

  postCreateCR(createcrobj: CreateCr): Observable<CreateCr>  {
    //console.log(asset)
    return this.http.post<CreateCr>(this.url, createcrobj);
  }
}
