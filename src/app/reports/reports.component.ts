import { Component, OnInit } from '@angular/core';
import { WebAppService } from '../Services/webapp-service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  wallets:any;
  Paids:any;
  constructor(  private _webappservice:WebAppService) { }

  ngOnInit() {
    this._webappservice.getWallet().subscribe(res=>{
      this.wallets=res.items;
    })

    this._webappservice.getPaid().subscribe(res=>{
       
      this.Paids=res.items;
    })

  }
}
