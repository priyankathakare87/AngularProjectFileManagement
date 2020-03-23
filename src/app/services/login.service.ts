import { Injectable, EventEmitter } from '@angular/core';
import { Login } from '../model/login';
import { UserProfile } from '../model/user-profile';
import { HttpClient,  HttpClientModule, HttpParams  } from '@angular/common/http';
import { EmployeeData } from '../model/employee-data';
import { error } from 'protractor';
import { Observable, of as ObservableOf, observable } from 'rxjs';
import { windowWhen } from 'rxjs/operators';
//import { of as ObservableOf} from 'rxjs/observable/of';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  $loggedInUserData = new EventEmitter();
  private employee: EmployeeData;
  emp: EmployeeData;
  public errorMessage : string;
  public empObs : Observable<EmployeeData>
  
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
        return this.http.post<EmployeeData>('http://10.20.11.46:3000/angular_auth', user)
                  
                // .subscribe(data => {
                //   this.employee = data;
                // })
               }

     setUserId(eccode){
      this.userid = eccode;
     } 
     getUserId(){
       return this.userid;
     }

     getUser(){
       return this.employee;
     }
     getUserName(){
       return this.employee.Name;
     }

     
    userAuthentication(user: Login) {
      this.http.post('http://10.20.11.46:3000/angular_auth',user)
      .subscribe(( empdata: EmployeeData) => {
        this.employee = empdata;
//        window.alert("inside success");
//        this.errorMessage = 'success';
  //      console.log(this.employee);
        //return this.errorMessage;
        
        },
        (error:any) => {
//          this.errorMessage = error;
  //        window.alert("inside error");
          //console.log(error);
          //return this.errorMessage;
          
        });
        //console.log("message in service" + this.errorMessage);
       
    }     

    userAuthenticationObs(user: Login): Observable<EmployeeData>{
      return  this.http.post<EmployeeData>('http://10.20.11.46:3000/angular_auth',user);
                     
                      
//       .subscribe(( empdata: EmployeeData) => {
//         this.employee = empdata;
// //        window.alert("inside success");
//         this.errorMessage = 'success';
//         console.log(this.employee);
//         //return this.errorMessage;
        
//         },
//         (error:any) => {
//           this.errorMessage = error;
//           window.alert("inside error");
//           console.log(error);
//           //return this.errorMessage;
//         });
//         //console.log("message in service" + this.errorMessage);
       
    }     

   isLoggedin(){
     return !!localStorage.getItem("token");
   } 
   logoutUser(){
  
    //localStorage.removeItem("token");
    console.log("logout")
  }

}
