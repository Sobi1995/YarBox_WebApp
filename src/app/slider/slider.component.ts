import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { Router } from '@angular/router';
import { WebAppService } from '../Services/webapp-service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor(  private _webappservice:WebAppService,
    location: PlatformLocation,
    private router:Router) { 
      history.pushState(null, null, null);
      window.onpopstate = function () {
          history.go(1);
      };
    }

  ngOnInit() {
  }

}
