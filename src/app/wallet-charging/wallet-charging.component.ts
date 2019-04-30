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
    location.onPopState(() => {
      // history.go(1);
      
     this.router.navigate(["/"])
});
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
}
