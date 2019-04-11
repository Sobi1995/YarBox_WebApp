import { Component, OnInit } from '@angular/core';
import { WebAppService } from '../Services/webapp-service';

@Component({
  selector: 'app-wallet-charging',
  templateUrl: './wallet-charging.component.html',
  styleUrls: ['./wallet-charging.component.css']
})
export class WalletChargingComponent implements OnInit {
pay:number=0;
  constructor(private _webAppService:WebAppService) { }

  ngOnInit() {
  }

  vlauePay(value:number){
    this.pay=value;
  }
  Pay(){
    this._webAppService.walletCharge(this.pay).subscribe(res=>{
       
       window.open(res.redirectTo);
    })
  }
}
