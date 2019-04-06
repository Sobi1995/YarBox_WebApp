import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet-charging',
  templateUrl: './wallet-charging.component.html',
  styleUrls: ['./wallet-charging.component.css']
})
export class WalletChargingComponent implements OnInit {
pay:number=0;
  constructor() { }

  ngOnInit() {
  }

  vlauePay(value:number){
    this.pay=value;
  }
}
