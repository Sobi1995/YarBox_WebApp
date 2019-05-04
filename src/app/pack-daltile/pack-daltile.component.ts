import { Component, OnInit } from '@angular/core';
import { PackService } from '../Services/Pack-Service';
import { WebAppService } from '../Services/webapp-service';

@Component({
  selector: 'app-pack-daltile',
  templateUrl: './pack-daltile.component.html',
  styleUrls: ['./pack-daltile.component.css']
})
export class PackDaltileComponent implements OnInit {
    PackDitile:any;
    driver:any=null;
  constructor(
    private PackService:PackService,
    private _webApp:WebAppService) { }

  ngOnInit() {
    this.PackDitile=this.PackService.getPackStatus;
      
  }
  getDriver(){
this._webApp.getDriverByPackId(this.PackDitile.id).subscribe(res=>{
  this.driver=res;
   
})
  }
}
