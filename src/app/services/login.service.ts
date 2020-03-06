import { Injectable, EventEmitter } from '@angular/core';
import { Login } from '../model/login';
import { UserProfile } from '../model/user-profile';
import { HttpClient,  HttpClientModule, HttpParams } from '@angular/common/http';
import { EmployeeData } from '../model/employee-data';
import { error } from 'protractor';
import { Observable, of as ObservableOf, observable } from 'rxjs';
//import { of as ObservableOf} from 'rxjs/observable/of';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  $loggedInUserData = new EventEmitter();
  private employee: EmployeeData;
  emp: EmployeeData;
  public errorMessage : string;

  private userid : string;

  constructor(private http: HttpClient) { }

     getAuthentication(user: Login) {
        this.http.post<EmployeeData>('http://10.20.11.46:3000/angular_auth', user)
        .subscribe((resposedata: EmployeeData) => {
        this.employee = resposedata;
        this.emp = resposedata;
        this.$loggedInUserData.emit(this.emp);
        });
      }

      getUserProfile(user: Login) {
        return this.http.post<EmployeeData>('http://10.20.11.46:3000/angular_auth', user);
      }

     setUserId(eccode){
      this.userid = eccode;
     } 
     getUserId(){
       return this.userid;
     }

    userAuthentication(user: Login){
      this.http.post('http://10.20.11.46:3000/angular_auth',user)
      .subscribe(( empdata: EmployeeData) => {
        this.employee = empdata;
        console.log("inside success");
        this.errorMessage = 'success';
        
        },
        (error:any) => {
          this.errorMessage = error;
          console.log("inside success");
          //console.log(error);
          //return this.errorMessage;
          
        });
        //console.log("message in service" + this.errorMessage);
       
    }     
}
