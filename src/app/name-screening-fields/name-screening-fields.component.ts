import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-screening-fields',
  templateUrl: './name-screening-fields.component.html',
  styleUrls: ['./name-screening-fields.component.css']
})
export class NameScreeningFieldsComponent implements OnInit {
  listtitle:string = "Name Screening Fields";
  p:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
