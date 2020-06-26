import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-score',
  templateUrl: './match-score.component.html',
  styleUrls: ['./match-score.component.css']
})
export class MatchScoreComponent implements OnInit {
  listtitle:string = "Match Score Threshold";
  p:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
