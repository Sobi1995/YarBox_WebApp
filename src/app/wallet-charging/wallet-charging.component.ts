import { Component, OnInit } from '@angular/core';
import { WebAppService } from '../Services/webapp-service';
import { PlatformLocation } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet-charging',
  templateUrl: './wallet-charging.component.html',
  styleUrls: ['./wallet-charging.component.css']
})
export class WalletChargingComponent implements OnInit {
pay:number=0;
constructor(  private _webappservice:WebAppService,
  location: PlatformLocation,
  private router:Router) { 
    location.onPopState(() => {
      // history.go(1);
      
     this.router.navigate(["/"])
});
  }

  ngOnInit() {
  }

  vlauePay(value:number){
    this.pay=value;
  }
  Pay(){
    this._webappservice.walletCharge(this.pay).subscribe(res=>{
       debugger
       window.open(res.redirectTo);
    })
  }
}
