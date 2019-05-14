import { Component, OnInit } from '@angular/core';
import { WebAppService } from '../Services/webapp-service';

@Component({
  selector: 'app-pack-history',
  templateUrl: './pack-history.component.html',
  styleUrls: ['./pack-history.component.css']
})
export class PackHistoryComponent implements OnInit {
historys:any;
  constructor(private _wepApp:WebAppService) { 
    history.pushState(null, null, null);
    window.onpopstate = function () {
        history.go(1);
    };
  }

  ngOnInit() {
    this._wepApp.getArrived().subscribe(res=>{
      this.historys=res.items;
      console.log(res.items)
    })
  }

}
