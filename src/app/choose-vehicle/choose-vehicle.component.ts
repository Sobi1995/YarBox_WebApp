import { Component, OnInit } from '@angular/core';
import { PackService } from '../Services/Pack-Service';
import { WebAppService } from '../Services/webapp-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-choose-vehicle',
  templateUrl: './choose-vehicle.component.html',
  styleUrls: ['./choose-vehicle.component.css']
})
export class ChooseVehicleComponent implements OnInit {
error:Boolean=false;
  constructor(
    private _packService:PackService,
    private _webapp:WebAppService,
    private router:Router) { 

      history.pushState(null, null, null);
      window.onpopstate = function () {
          history.go(1);
      };
    }
    vehicle:number=0;
  ngOnInit() {
    this._webapp.setLoding(true);
    setTimeout(() => 
    {
this.vehicle=this._packService.getVehicle();
this._webapp.setLoding(false);
 
},1500);
  }
  ChooseVehicle(id:number){
    this.vehicle=id;
    this._packService.setVehicle(id);
  } 
  checkValidation(){
     
    if(this.vehicle==0)
      return true;

      return false;
    
  }
  getFactor(){
    this.error=this.checkValidation();
 if(!this.error){
  this._webapp.getFactorKey().subscribe(res=>{
   
    this.router.navigate(["/factor/"+res.packKey]);
  })
 }

  }
  Back(){
    this._packService.clearVehicle();
    this.router.navigate(['/postPack']);
  }
}
