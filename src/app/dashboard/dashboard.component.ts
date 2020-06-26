import { Component, OnInit } from '@angular/core';
import {AuthserviceService} from '../auth/authservice.service';
import {Auth } from '../auth/auth';
import { Router } from '@angular/router';
import { Role } from '../shared/tabular';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectauth : Auth;
  Role = Role;
   logotitle = "Trustling - Real Time Screening"; 
   features = [
     {"name" :"netural Words","icon":"fa-minus-circle","pagelink":"neutralwords"},
     {"name":"payement screening","icon":"fa-credit-card","pagelink":"neutralwords"},
     {"name":"name screening","icon":"fa-user","pagelink":"name-screen"},
     {"name":"threshold Mangement","icon":"fa-support","pagelink":"match-score-threshold"},
     {"name":"Internal list management","icon":"fa-list-ul","pagelink":"internawatchlist"},
     {"name":"Politicaly Exposed person","icon":"fa-users","pagelink":"neutralwords"},
     {"name":"zone vs Golbal Keywords","icon":"fa-globe","pagelink":"zonevsglobal"},
     {"name":"stripping detection","icon":"fa-street-view","pagelink":"neutralwords"},
     {"name":"customer basic number position","icon":"fa-building-o","pagelink":"neutralwords"},
     {"name":"Add new zone","icon":"fa-plus-circle","pagelink":"neutralwords"}
    ];
 

    
   


  ngOnInit(): void {

  }


  constructor(private router: Router, public _authService: AuthserviceService) { }
  role = Role;
 get isAuthorized() {
   return this._authService.isAuthorized();
 }

 get isAdmin() {
   return this._authService.hasRole(Role.Admin);
 }
 get ischeker() {
   return this._authService.hasRole(Role.checker);
 }
 get ismakers() {
   return this._authService.hasRole(Role.makers);
 }
 get istest() {
   return this._authService.hasRole(Role.test);
 }
 logout() {
   this._authService.logout();
   this.router.navigate(['login']);
 }


}
