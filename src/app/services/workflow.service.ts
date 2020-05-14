import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Workflow } from '../model/workflow';
import { map, flatMap, filter, reduce } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService{
  private url = 'http://localhost:3000/assets/workflow/display';

  constructor(private http : HttpClient) {   }

  getWorkflow(): Observable<Workflow[]>{
   this.url = this.url + '/4539';
    return this.http.get<Workflow[]>(this.url);
    console.log(this.url);
   // return this.http.get<Workflow>(this.url);
  //  return this.http
  //  .get(this.url)
  //  .map( (response : Response) => {
  //   return <Workflow[]>response.json()y
  //   ;
  //  })
  
}
}
