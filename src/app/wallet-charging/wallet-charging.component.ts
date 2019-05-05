import { Component, OnInit } from '@angular/core';
import { WebAppService } from '../Services/webapp-service';
import { PlatformLocation } from '@angular/common';
import { Router } from '@angular/router';
import { PackService } from '../Services/Pack-Service';

@Component({
  selector: 'app-wallet-charging',
  templateUrl: './wallet-charging.component.html',
  styleUrls: ['./wallet-charging.component.css']
})
export class WalletChargingComponent implements OnInit {
pay:number=null;
constructor( 
   private _webappservice:WebAppService,
  location: PlatformLocation,
  private router:Router,
  private _packservice:PackService,) { 
    history.pushState(null, null, null);
    window.onpopstate = function () {
        history.go(1);
    };
  }

  ngOnInit() {
   if(this.pay <=0 || this.pay==null ){
    return;
   }

  this._webappservice.getCheck().subscribe(res=>{
    this._packservice.uodateCredit(res.credit);
  })
  
  }

  vlauePay(value:number){
    this.pay=value;
  }
  Pay(){
    this._webappservice.walletCharge(this.pay).subscribe(res=>{
    
      window.location.href=res.redirectTo;
    })
  }

  Cardpay(){
    setTimeout(() => 
    {
      var x = document.getElementsByClassName("item active")[0].getAttribute("data-value");; 
 this.pay= +x;
    },
    1000);

   
  }
 
Back(){
  debugger
  if(this._packservice.getFactorKey!="")
  {
    this.router.navigate(["/factor/"+this._packservice.getFactorKey]);
  }
  else{
    this.router.navigate(["/"])
  }
}
 
}
