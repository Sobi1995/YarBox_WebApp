import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { WebAppService } from '../Services/webapp-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  constructor(  private _webappservice:WebAppService,

    private router:Router) { 
 
  history.pushState(null, null, null);
window.onpopstate = function () {
    history.go(1);
};
    }

  ngOnInit() {
  }

}
