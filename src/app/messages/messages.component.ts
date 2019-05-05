import { Component, OnInit } from '@angular/core';
import { WebAppService } from '../Services/webapp-service';
import { PlatformLocation } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages:any;
  
  constructor( location: PlatformLocation,private router:Router, private _webappservice:WebAppService) {
    history.pushState(null, null, null);
    window.onpopstate = function () {
        history.go(1);
    };
   }
  ngOnInit() {
    this._webappservice.getUserMessages().subscribe(res=>{
      this.messages=res.items;
    })
  }
}
