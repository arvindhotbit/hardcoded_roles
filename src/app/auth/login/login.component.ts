import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {AuthserviceService} from '../authservice.service';
import {Auth, User} from '../auth';
import {Role} from '../../shared/tabular';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _authservice:AuthserviceService, private toastr: ToastrService,private router: Router) { }
  message : string = "";
  Role = Role;
  roles = "";
  ngOnInit(): void {
    this.resetForm();

  }
  resetForm(formdata?: NgForm) {
    if (formdata)
    formdata.reset();
      this._authservice.authscheme = {
        userid: "",
        cn: "",
        sn: "",
        email: "",
        password: "",
        empNo: "",
        department: "",
        roles: ""
    
    }
   }
 

   submitform(formdata: NgForm){
  this._authservice.loginuser(formdata.value).subscribe(
    (res) =>{
      localStorage.setItem('token',res.token);
  this.message = res.message,
  console.log(res.message);
  if(res.status==1){
    this.router.navigate(['/login'])
  }
  else
  {
    this.router.navigate(['/login'])
  }

  },
  (error)=>{

  console.log(error),
  this.message = "login failed";
  });

}

login(role: Role) {
  this._authservice.login(role);
  this.router.navigate(['/home']);
}


}
