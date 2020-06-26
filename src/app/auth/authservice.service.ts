import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CanActivate, Router } from '@angular/router';
import {Role} from '../shared/tabular';
import {Auth,User} from '../auth/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  authscheme:  Auth;
  private user: User;
  isloggedin():boolean{
    return true;
    }
  constructor(private http : HttpClient,private router: Router) { }
  readonly _base_url:string = "http://localhost:3000/api";


createuser(auth:Auth)
{ 
  return this.http.post<any>(this._base_url + '/addUsers',auth)

};
loginuser(auth:Auth)
{ 
  return this.http.post<any>(this._base_url + '/login',auth)

};
loggenIn(){
  return  !!localStorage.getItem('token')
}
loggedOut()
{
  localStorage.removeItem("token");
  this.router.navigate(['/login']);

}

login(role: Role) {
  this.user = { role: role };
}
isAuthorized() {
  return !!this.user;
}

ischeker()
{
  return this.user;
}

hasRole(role: Role) {
  return this.isAuthorized() && this.user.role === role;
}


logout() {
this.user = null;
}
}
