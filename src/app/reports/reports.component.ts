import { Component, OnInit } from '@angular/core';
import { WebAppService } from '../Services/webapp-service';
import { PlatformLocation } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  wallets:any;
  Paids:any;
  constructor(  private _webappservice:WebAppService,
    location: PlatformLocation,
    private router:Router) { 
      history.pushState(null, null, null);
      window.onpopstate = function () {
          history.go(1);
      };
    }

  ngOnInit() {
    this._webappservice.getWallet().subscribe(res=>{
      this.wallets=res.items;
      console.log(res.items)
    })

    this._webappservice.getPaid().subscribe(res=>{
       
      this.Paids=res.items;
    })

  }
}
