import { Component, OnInit } from '@angular/core';
import { WebAppService } from '../Services/webapp-service';
import { $ } from "jquery"
 
import { PackService } from '../Services/Pack-Service';
import { Route, Router } from '@angular/router';
import { DestinationDto } from '../Model/dto/destination-dto';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  destinationModel:DestinationDto;
  typeCity:number=3;
  Provinces:any;
  Cities:any;
  Province:string;
 portlocation:string="";
 error:boolean=false;
  constructor(
    private _webappService:WebAppService,
    private _postPackService:PackService,
    private router:Router) { 
    this.destinationModel=new DestinationDto("","",0,"","","");
    
  }
  onSubmit() {
    alert("")
    this.destinationModel.portId=10198;
     
    this.error=this.checkValidation(this.destinationModel);
  if(this.error){
 
    return;
  }
  this.destinationModel.city="تهران";
  this.destinationModel.city="تهران";

  this._postPackService.setDestination(this.destinationModel);
  this.router.navigate(["/postPack-deities"])
  }
  ngOnInit() {
      this._postPackService.clearPaks();
    this.destinationModel=this._postPackService.getDestination();
    this.typeCity=this._postPackService.getTypeCity();
    this._webappService.getProvinces().subscribe(res=>{
      this.Provinces=res;
       
 //[routerLink]="['/postPack-deities']"
    })
  }
  AcceptDestination(){
      

  }
  PostType(type:number){
 this._postPackService.setTypeCity(type);
  this.Cities=null;
  
     this.typeCity=type;
     if(type==1) 
       this._postPackService.setReceiveType("port");
       else{
       this._postPackService.setReceiveType("doorToDoor");
       this.destinationModel.street=""
       this.portlocation=""}
     
      
      
  }
  AcceptPacks(){
  //   $(".btn-circle-download").addClass("load");
  // setTimeout(function() {
  // $(".btn-circle-download").addClass("done");
  // }, 1000);
  // setTimeout(function() {
  // $(".btn-circle-download").removeClass("load done");
  // }, 5000);
   
  }
  SelectProvince(province:string){
     
    
    this.destinationModel.province=province;
this._webappService.getCities(province,this.typeCity).subscribe(res=>{
  this.Cities=res;
})
  }
  SelectCity(city:string){
      if(this.typeCity==1)
  {
    this._webappService.getPortLocation(city).subscribe(res=>{
      this.portlocation=res.location;
      this.destinationModel.street=res.location;
      console.log(res);
      return;
    })
  }
 this.destinationModel.city=city;

  }
  
  checkValidation(destination:DestinationDto){
      
      
    if (destination.city ==undefined ||
       destination.portId ==0 ||
       destination.province ==undefined ||
       destination.receiverName ==undefined ||
       destination.receiverPhoneNumber ==undefined  ||
       destination.street ==undefined ||
       !this.is_Number(destination.receiverPhoneNumber ||
        destination.receiverPhoneNumber.length>=13) ){
         
          return  true

       }
       else{
         return false;
       }
  
  }
    is_Number(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }
}
