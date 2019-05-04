 
import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { WebAppService } from '../Services/webapp-service';
import { $ } from "jquery"
 
import { PackService } from '../Services/Pack-Service';
import { Route, Router } from '@angular/router';
import { DestinationDto } from '../Model/dto/destination-dto';

@Component({
  selector: 'app-add-favorite-address-destination',
  templateUrl: './add-favorite-address-destination.component.html',
  styleUrls: ['./add-favorite-address-destination.component.css']
})
export class AddFavoriteAddressDestinationComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
    this._postPackService.setStatusMnuAddressFavourite(true);
  }
  savedaddress:any[]=[]
  destinationModel:DestinationDto;
  typeCity:number=0;
  Provinces:any;
  Cities:any;
  Province:string;
 portlocation:string="";
 errorAddress:string=null;
 @ViewChild('closeModalSelectAddress') private closeModalSelectAddress: ElementRef;
 @ViewChild('closeModalfavoriteaddresses') private closeModalfavoriteaddresses: ElementRef;
 
 @ViewChild('addAddress') button;
 error:boolean=false;
  constructor(
    private _webappService:WebAppService,
    private _postPackService:PackService,
    private router:Router) { 
    this.destinationModel=new DestinationDto("","",0,"","","");
    
  }
  
  ngOnInit() {
    this.destinationModel.province=undefined;
    this.destinationModel.city=undefined;
    this._webappService.getProvinces().subscribe(res=>{
      this.Provinces=res;
       
 //[routerLink]="['/postPack-deities']"
    })
   

  }

  PostType(type:number){
 
  this.Cities=null;
  
     this.typeCity=type;
 
       this.destinationModel.street=""
       this.portlocation=""
      
     
      
      
  }

  SelectProvince(province:string){
    this.destinationModel.city=undefined;
    
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
  

    is_Number(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }

    SaveAddress(val :string){
 
         if(val==""){
           this.errorAddress="لطفا  عنوان را وارد کنید"
           return
         }
    this.savedaddress = JSON.parse(localStorage.getItem("Favoriteaddressdestination"));
    let distnation:any=this.destinationModel;
    distnation.title=val;
    distnation.typeCity=this.typeCity;
    distnation.title
    if(this.savedaddress==null)
    this.savedaddress=Array.of(distnation);
    else
    this.savedaddress.push(distnation)
    localStorage.setItem("Favoriteaddressdestination",JSON.stringify(this.savedaddress));
    this.errorAddress=null;
    this.closeModalfavoriteaddresses.nativeElement.click();  
    this.router.navigate(["/favorite-address"])
    }

 
    onSubmit(){
      this._postPackService.setStatusMnuAddressFavourite(true);
      if(this.destinationModel.city=="شهر" || this.destinationModel.province=="استان" || this.destinationModel.city==undefined || this.destinationModel.province==undefined){
         
        return
      }
      let element: HTMLElement = document.getElementById('OpenModal') as HTMLElement;
      element.click(); 
    }
  
}
