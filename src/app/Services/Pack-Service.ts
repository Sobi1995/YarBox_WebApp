import { Injectable } from '@angular/core';

 
import { MultiplePacksDto } from '../Model/dto/multiple-packs-dto';
import { originDto } from '../Model/dto/origin-dto';
import { DestinationDto } from '../Model/dto/destination-dto';
import { AddressOrigin } from '../Model/Address-Origin';
import { MainPacks } from '../Model/dto/Main-Packs-dto';
import { packsDto } from '../Model/dto/packs-dto';
import { empty, Observable, Subject } from 'rxjs';
import { Profile } from '../Model/dto/Profile';
import { ProfileDto } from '../Core/DTO/Profile-dto';
import { AcceptSearchDto } from './accept-search-dto';
import { isEmpty } from 'rxjs/internal/operators/isEmpty';

 
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
    
this.MultiplePacks.origin.city= "تهران"
this.MultiplePacks.origin.latitude=  origin.latitude!=undefined ? origin.latitude  : this.MultiplePacks.origin.latitude
this.MultiplePacks.origin.province= "تهران"
this.MultiplePacks.origin.street= origin.street!=undefined ? origin.street  : this.MultiplePacks.origin.street
this.MultiplePacks.origin.senderPhoneNumber= JSON.parse(localStorage.getItem("Profile")).phoneNumber
 
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
   this.getMultiplePacks.origin.longitude=addressOrigin.lng;
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
 //git :()
 clearDestination(){
  this.MultiplePacks.destination=new DestinationDto();
  this.MultiplePacks.destination={} as DestinationDto;
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
  this.MultiplePacks.count= mainpacks.count!=undefined ? mainpacks.count  : this.MultiplePacks.count;
  this.MultiplePacks.PostPackWeight= mainpacks.PostPackWeight!=undefined ? mainpacks.PostPackWeight  : this.MultiplePacks.PostPackWeight;
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
   mainpack.PostPackWeight=JSON.parse(localStorage.getItem("MultiplePacks")).PostPackWeight;
   mainpack.count=JSON.parse(localStorage.getItem("MultiplePacks")).count;
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
setLatLong(lat:string,long:string){
   
this.MultiplePacks.origin.latitude=lat;
this.MultiplePacks.origin.longitude=long;
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
  let emptyPack=new MultiplePacksDto();
  emptyPack.postPacktype=this.MultiplePacks.postPacktype;
  localStorage.setItem("MultiplePacks",JSON.stringify(emptyPack))
}
clearLocalStorageEmptyReFlow() {
   
let typeDivice=this.MultiplePacks.postPacktype;
this.MultiplePacks=new MultiplePacksDto();
this.MultiplePacks.postPacktype=typeDivice
 localStorage.setItem("MultiplePacks",JSON.stringify(this.MultiplePacks))
}
clearLocalStorageEmptyReFlowWithOutOrigin() {
   
  let typeDivice=this.MultiplePacks.postPacktype;
  let origin =this.MultiplePacks.origin;
  this.MultiplePacks=new MultiplePacksDto();
  this.MultiplePacks.postPacktype=typeDivice
  this.MultiplePacks.origin=origin;
  this.MultiplePacks.origin.city="تهران";
  this.MultiplePacks.origin.province="تهران";
  this.MultiplePacks.origin.senderPhoneNumber=JSON.parse(localStorage.getItem("Profile")).phoneNumber;
   localStorage.setItem("MultiplePacks",JSON.stringify(this.MultiplePacks))
  }
get getRetryFlow(){

// let tryflow=this.MultiplePacks;
 
let tryflow=JSON.parse(localStorage.getItem("MultiplePacks"))
   var isdestnation=(Object.keys(tryflow.destination).length === 0)
 
  console.log(isdestnation,tryflow.destination)
   var ispack=tryflow.packs;
   var isvehicleId=tryflow.vehicleId;
   if(!isdestnation && ((ispack!=undefined && ispack.length>=1)   ) && (isvehicleId!=undefined && isvehicleId!=0)){
     return "/choose-vehicle";
   }
   else if(!isdestnation && ((ispack!=undefined && ispack.length>=1)   )){
     return "/postPack"
   }
   else if(!isdestnation ){
    return "/destination"
  }

  return null;
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
private isEmptyObject(obj) {
  return (obj && (Object.keys(obj).length === 0));
}
localstorageClear(){
  
  let homescreen= JSON.parse(localStorage.getItem("add-homescreen"));
  localStorage.clear();
  localStorage.setItem("add-homescreen",homescreen)
  this.setOnLocalstoreage();  
}
setDivice(type:number){
  this.MultiplePacks.postPacktype=type;
  this.setOnLocalStorage()
}

ToNumEn(str:string){
 
//۰۱۲۳۴۵۶۷۸۹
      var i;
      var res=""
      for (i = 0; i < str.length; i++) { 
        let asciiCOde=str[i].charCodeAt(0);
       
        if(asciiCOde==1632 || asciiCOde==1776 )//1632
        res+="0"
        else if(asciiCOde==1633 || asciiCOde==1777)
        res+="1"
        else if(asciiCOde==1634 || asciiCOde==1778)
        res+="2"
        else if(asciiCOde==1635 || asciiCOde==1779)
        res+="3"
        else if(asciiCOde==1636 || asciiCOde==1780)
        res+="4"
        else if(asciiCOde==1637 || asciiCOde==1781)
        res+="5"
        else if(asciiCOde==1638 || asciiCOde==1782)
        res+="6"
        else if(asciiCOde==1639 || asciiCOde==1783)
        res+="7"
        else if(asciiCOde==1640 || asciiCOde==1784)
        res+="8"
        else if(asciiCOde==1641 || asciiCOde==1785)
        res+="9"
        else
        res+=str[i]
     
      }
 return res;
 
}
} 
enum DiviceType {
  Android = 0,
  Ios = 1,
  Web = 2,
  WebAppAndrid = 3,
  WebAppIos = 4,
}
// [Display(Name = "اندروید")]
// Android = 0,
// [Display(Name = "Ios")]
// Ios = 1,
// [Display(Name = "وب")]
// Web = 2,
// [Display(Name = "WebAppAndrid")]
// WebAppAndrid = 2,
// [Display(Name = "WebAppIos")]
// WebAppIos = 3