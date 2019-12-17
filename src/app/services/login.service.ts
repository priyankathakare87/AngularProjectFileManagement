import { Injectable, EventEmitter } from '@angular/core';
import { Login } from '../model/login';
import { UserProfile } from '../model/user-profile';
import { HttpClient,  HttpClientModule, HttpParams } from '@angular/common/http';
import { EmployeeData } from '../model/employee-data';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  $loggedInUserData = new EventEmitter();
  private employee: EmployeeData;
  emp: EmployeeData;
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
}
