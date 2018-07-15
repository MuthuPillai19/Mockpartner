import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paramselector',
  templateUrl: './paramselector.component.html',
  styleUrls: ['./paramselector.component.css']
})
export class ParamselectorComponent implements OnInit {
  languages = ["en_US", "en_GB", "fr_CA", "bg_BG", "it_IT"];
  partnerCodes = ["mockpartner", "mockpartner2", "mockpartner3", "mockpartner4"];

  constructor() { }

  ngOnInit() {
  }

}
