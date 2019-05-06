import { Injectable } from '@angular/core';

 
import { MultiplePacksDto } from '../Model/dto/multiple-packs-dto';
import { originDto } from '../Model/dto/origin-dto';
import { DestinationDto } from '../Model/dto/destination-dto';
import { AddressOrigin } from '../Model/Address-Origin';
import { MainPacks } from '../Model/dto/Main-Packs-dto';
import { packsDto } from '../Model/dto/packs-dto';
import { empty } from 'rxjs';
import { Profile } from '../Model/dto/Profile';
import { ProfileDto } from '../Core/DTO/Profile-dto';
import { AcceptSearchDto } from './accept-search-dto';

 
@Injectable()
export class PackService{

    private MultiplePacks:MultiplePacksDto;
    private Profile:Profile;
    private typeCity:number;
   private defultMenu=true;
   private PackStatus:any;
   private backStatusFacktore:boolean=false;
   private StatusPay:AcceptSearchDto;
   private StatusMnuAddressFavourite:boolean=true;
   private FactorKey:string
constructor(){
  this.MultiplePacks=new MultiplePacksDto();
  this.MultiplePacks.origin=new originDto();
  this.MultiplePacks.destination=new DestinationDto();
  let isLocalStoragePack=localStorage.getItem("MultiplePacks");
   
  if(isLocalStoragePack==null)
  this.setOnLocalStorageEmpty();
  else{
     
    this.MultiplePacks=JSON.parse(isLocalStoragePack);
  }
 
  this.typeCity=0;
   
 if (localStorage.getItem("Profile")!=null){
  let phoneNumber=JSON.parse(localStorage.getItem("Profile"))
   this.SetPofile(JSON.parse(localStorage.getItem("Profile")));
  
  this.setOrigin(new originDto(phoneNumber.phoneNumber,"تهران","تهران",undefined,undefined,undefined));
 }
}
setOnLocalstoreage(){
  let isLocalStoragePack=localStorage.getItem("MultiplePacks");
   
  if(isLocalStoragePack==null)
  this.setOnLocalStorageEmpty();
  else{
     
    this.MultiplePacks=JSON.parse(isLocalStoragePack);
  }
}
 get getMultiplePacks(){
     return this.MultiplePacks;
 }

 setOrigin(origin:originDto){
    
this.MultiplePacks.origin.city= origin.city!=undefined ? origin.city  : this.MultiplePacks.origin.city
this.MultiplePacks.origin.latitude=  origin.latitude!=undefined ? origin.latitude  : this.MultiplePacks.origin.latitude
this.MultiplePacks.origin.province=  origin.province!=undefined ? origin.province  : this.MultiplePacks.origin.province
this.MultiplePacks.origin.street= origin.street!=undefined ? origin.street  : this.MultiplePacks.origin.street
this.MultiplePacks.origin.senderPhoneNumber= origin.senderPhoneNumber!=undefined ? origin.senderPhoneNumber  : this.MultiplePacks.origin.senderPhoneNumber
 
 }
   getAddress(){
  //  return this.MultiplePacks.origin.street;
  return JSON.parse(localStorage.getItem("MultiplePacks")).street;
 }
setAddress(address:string){
   
  this.MultiplePacks.origin.street=address;
  this.setOnLocalStorage();
}
   SetAddress(addressOrigin:AddressOrigin){
      
   this.getMultiplePacks.origin.street=addressOrigin.address;
   this.getMultiplePacks.origin.latitude=addressOrigin.lat;
   this.getMultiplePacks.origin.llongitude=addressOrigin.lng;
   this.setOnLocalStorage();
 }
 
getOrigin(){
  
  // return this.getMultiplePacks.origin;
  return JSON.parse(localStorage.getItem("MultiplePacks")).origin;
}
clearOrigin(){
  // this.MultiplePacks.origin=new originDto();
}
 setDestination(destination:DestinationDto){
  this.MultiplePacks.destination.city= destination.city!=undefined ? destination.city  : this.MultiplePacks.destination.city
  this.MultiplePacks.destination.portId= destination.portId!=undefined ? destination.portId  : this.MultiplePacks.destination.portId
  this.MultiplePacks.destination.province= destination.province!=undefined ? destination.province  : this.MultiplePacks.destination.province
  this.MultiplePacks.destination.receiverName= destination.receiverName!=undefined ? destination.receiverName  : this.MultiplePacks.destination.receiverName
  this.MultiplePacks.destination.receiverPhoneNumber= destination.receiverPhoneNumber!=undefined ? destination.receiverPhoneNumber  : this.MultiplePacks.destination.receiverPhoneNumber
  this.MultiplePacks.destination.street= destination.street!=undefined ? destination.street  : this.MultiplePacks.destination.street
    
  this.setOnLocalStorage();
 }

 getDestination(){
  // return this.MultiplePacks.destination;
  return JSON.parse(localStorage.getItem("MultiplePacks")).destination;
 }
 clearDestination(){
  this.MultiplePacks.destination=new DestinationDto();
  this.typeCity=0;
  this.setOnLocalStorage();
  localStorage.setItem("typeCity","0");
 }
 setMainPaks(mainpacks:MainPacks){
  
  this.MultiplePacks.content= mainpacks.content!=undefined ? mainpacks.content  : this.MultiplePacks.content
  this.MultiplePacks.insurancePrice= mainpacks.insurancePrice!=undefined ? mainpacks.insurancePrice  : this.MultiplePacks.insurancePrice
  this.MultiplePacks.isInsurance= mainpacks.isInsurance!=undefined ? mainpacks.isInsurance  : this.MultiplePacks.isInsurance
  this.MultiplePacks.isPacking= mainpacks.isPacking!=undefined ? mainpacks.isPacking  : this.MultiplePacks.isPacking
  // this.MultiplePacks.receiveType= mainpacks.receiveType!=undefined ? mainpacks.receiveType  : this.MultiplePacks.receiveType
  this.MultiplePacks.vehicleId= mainpacks.vehicleId!=undefined ? mainpacks.vehicleId  : this.MultiplePacks.vehicleId
  
  this.setOnLocalStorage();
 }
 setPaks(packs:packsDto[])
 {
     
   this.MultiplePacks.packs=packs;
   this.setOnLocalStorage();
 }
 getPaks(){
  //  return this.MultiplePacks.packs;'
  return JSON.parse(localStorage.getItem("MultiplePacks")).packs;
 }

 clearPaks(){
  this.MultiplePacks.packs=[];
  this.MultiplePacks.content=null;
  this.MultiplePacks.isInsurance=true;
  this.MultiplePacks.isPacking=true;
  this.MultiplePacks.receiveType=null;
  this.MultiplePacks.vehicleId=null;
  this.MultiplePacks.insurancePrice=null;
  this.setOnLocalStorage();
 
 }
 getMainPack(){
//    let mainpack=new MainPacks();
//    mainpack.content=this.MultiplePacks.content;
//    mainpack.isInsurance=this.MultiplePacks.isInsurance;
//    mainpack.isPacking=this.MultiplePacks.isPacking;
//    mainpack.receiveType=this.MultiplePacks.receiveType;
//    mainpack.vehicleId=this.MultiplePacks.vehicleId;
//    mainpack.insurancePrice=this.MultiplePacks.insurancePrice;
//  return mainpack;
  
   let mainpack=new MainPacks();
   mainpack.content=JSON.parse(localStorage.getItem("MultiplePacks")).content;
   mainpack.isInsurance=JSON.parse(localStorage.getItem("MultiplePacks")).isInsurance;
   mainpack.isPacking=JSON.parse(localStorage.getItem("MultiplePacks")).isPacking;
   mainpack.receiveType=JSON.parse(localStorage.getItem("MultiplePacks")).receiveType;
   mainpack.vehicleId=JSON.parse(localStorage.getItem("MultiplePacks")).vehicleId;
   mainpack.insurancePrice=JSON.parse(localStorage.getItem("MultiplePacks")).insurancePrice;
 return mainpack;

 }
 IsExistpacks(){
    
  //  if(this.MultiplePacks.packs==undefined)
  //  return false;
  //  else
  //  return true;
     if(JSON.parse(localStorage.getItem("MultiplePacks")).packs==undefined)
     return false;
     else
    return true;
 }

 setReceiveType(type:string){
    
this.MultiplePacks.receiveType=type;
this.setOnLocalStorage();
 }

 setVehicle(id:number){
   this.MultiplePacks.vehicleId=id;
   this.setOnLocalStorage();
 }
 getVehicle(){
  //  return  this.MultiplePacks.vehicleId;
  return JSON.parse(localStorage.getItem("MultiplePacks")).vehicleId
 }
 clearVehicle(){
    this.MultiplePacks.vehicleId=0;
    this.setOnLocalStorage();
 }

 SetPofile(profile:Profile){
this.Profile=profile;
}
get getProfile(){
  return this.Profile;
}
get getCredit(){
return this.Profile.credit;
}
setTypeCity(status:number){
  // this.typeCity=status;
localStorage.setItem("typeCity",status.toString());
}
getTypeCity(){
//  return this.typeCity 
return localStorage.getItem("typeCity");
}
setLatLong(long:string,lat:string){
   
this.MultiplePacks.origin.latitude=lat;
this.MultiplePacks.origin.llongitude=long;
}
setDefultMenu(status:boolean){
this.defultMenu=status
}
get getDefultMenu(){
  return this.defultMenu;
}

setOnLocalStorage(){
   
  localStorage.setItem("MultiplePacks",JSON.stringify(this.MultiplePacks))
}
setOnLocalStorageEmpty(){
  let empty=new MultiplePacksDto();
  empty=new MultiplePacksDto();
  empty.origin=new originDto();
  empty.destination=new DestinationDto();
   
  localStorage.setItem("MultiplePacks",JSON.stringify(empty))
}

get getRetryFlow(){
   
  // var a=this.MultiplePacks.
  
  return "";
}
uodateCredit(val){
 
  let profile:ProfileDto= JSON.parse(localStorage.getItem("Profile"));
  profile.credit=val
  localStorage.setItem("Profile",JSON.stringify(profile))
}
setPackStatus(val){
  this.PackStatus=val;
}
get getPackStatus(){
  return this.PackStatus;
}
get getBackStatusFacktore(){
  return this.backStatusFacktore;
}
  setBackStatusFacktore(status:boolean){
  this.backStatusFacktore=status;
}
setStatusPay(status:AcceptSearchDto){
  this.StatusPay=status;
}
get getStatusPack(){
  return this.StatusPay;
}

get getStatusMnuAddressFavourite(){
  return this.StatusMnuAddressFavourite;
}
  setStatusMnuAddressFavourite(sttaus:boolean){
    this.StatusMnuAddressFavourite=sttaus;
}
 setFactorKey(key:string){
   this.FactorKey=key
 }
 get getFactorKey(){
   return this.FactorKey;
 }

} 
 