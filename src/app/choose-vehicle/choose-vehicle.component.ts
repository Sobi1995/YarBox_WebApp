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

  constructor(
    private _packService:PackService,
    private _webapp:WebAppService,
    private router:Router) { }
    vehicle:number=0;
  ngOnInit() {
     
this.vehicle=this._packService.getVehicle();
  }
  ChooseVehicle(id:number){
    this.vehicle=id;
    this._packService.setVehicle(id);
  } 
  checkValidation(){
     
    if(this.vehicle==0){
      alert("لطفا یکی از گزینه ها را وارد کنید")
      return false
    }
    else{
      return true;
    }
  }
  getFactor(){
 if(this.checkValidation()==true){
  this._webapp.getFactorKey().subscribe(res=>{
   
    this.router.navigate(["/factor/"+res.packKey]);
  })
 }

  }
}
