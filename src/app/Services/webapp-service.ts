import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StepPackEnum } from '../Model/Step-Pack-Enum';
import { MultiplePacksDto } from '../Model/dto/multiple-packs-dto';
import { originDto } from '../Model/dto/origin-dto';
import { DestinationDto } from '../Model/dto/destination-dto';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PackService } from './Pack-Service';

import { AcceptSearchDto } from './accept-search-dto';
@Injectable()
export class WebAppService{
 private api:string;
 private httpLoding:boolean=false;     
private packsRuning:any;
 
constructor(private _http:HttpClient,private _packService:PackService){

this.api="https://api.yarbox.co/api/vv2/";
}
 

 
 getCities(provinces:string,type:number):Observable<any>{
    
      this.setLoding(true);
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
   
  return  this._http.get(this.api+"provinces/"+provinces+"/GetCityByType?type="+type,{headers:headers}).pipe(
        map((response:any) => {
            this.setLoding(false);
 return  response.items
        } )
        );
 }

 getProvinces():Observable<any>{
      this.setLoding(true);
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

  return  this._http.get(this.api+"provinces",{headers:headers}).pipe(
        map((response:any) => {
            this.setLoding(false);
        return    response.items
        } )
        );
 }

 getPackrunning(){
      this.setLoding(true);
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

   return  this._http.get(this.api+"packs/running",{headers:headers}).pipe(
        map((response:any) => {
            this.setLoding(false);
            this.packsRuning= response.items;
        return    response.items
        } )
        );
 }

 getPackrunningOnCache(){
   return this.packsRuning
 }
 getPostPackType(){
      this.setLoding(true);
     let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

  return  this._http.get(this.api+"pack-data/types",{headers:headers}).pipe(
        map((response:any) => {
            this.setLoding(false);
        return    response.items
        } )
        );
 }
 getCedarmapAddress(lat:string,long:string){
      
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
  headers = headers.set('Content-Type', 'application/json; charset=utf-8');

return  this._http.get("https://api.cedarmaps.com/v1/geocode/cedarmaps.streets/" + lat + "," + long + ".json?access_token=ff5fbe22dd56308dc101e9949a5f67ad0622d840",{headers:headers}).pipe(
      map((response:any) => {
          
      return    response.result
      } )
      );
 }
 getCheck(){
      
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
  headers = headers.set('Content-Type', 'application/json; charset=utf-8');

return  this._http.get(this.api+"account/check",{headers:headers}).pipe(
      map((response:any) => {
          
      return    response
      } )
      );
 }
 getFactorKey(){
      this.setLoding(true);
       let headers = new HttpHeaders();
       headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
       headers = headers.set('Content-Type', 'application/json; charset=utf-8');
   let packs=this._packService.getMultiplePacks;
     return  this._http.post(this.api+"packs/MultiplePacks",packs,{headers:headers},).pipe(
           map((response:any) => {
            this.setLoding(false);
           return    response
           } )
           );
 }


getFactorDatiles(key){
      this.setLoding(true);
      let headers = new HttpHeaders();
      headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
  let packs=this._packService.getMultiplePacks;
    return  this._http.get(this.api+"/packs/factor/"+key,{headers:headers},).pipe(
          map((response:any) => {
            this.setLoding(false);
          return    response
          } )
          );
}

getSearchDriver(packid:number){
     
           let headers = new HttpHeaders();
      headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
  let packs=this._packService.getMultiplePacks;
    return  this._http.post(this.api+"driver/AcceptedCarrierInfo?postPackId="+packid,null,{headers:headers},).pipe(
          map((response:any) => {
          
          return    response
          } )
          );
}
getDriver(mobile:string){
      this.setLoding(true);
      let headers = new HttpHeaders();
 
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
  let packs=this._packService.getMultiplePacks;
    return  this._http.post(this.api+"driver/profile?mobile="+mobile,null,{headers:headers},).pipe(
          map((response:any) => {
            this.setLoding(false);
          return    response
          } )
          );
}
AcceptToSearch(acceptsearch:AcceptSearchDto){
  this.setLoding(true);
  let headers = new HttpHeaders();

  headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
 
return  this._http.post(this.api+"packs/accept",acceptsearch,{headers:headers}).pipe(
      map((response:any) => {
        this.setLoding(false);
      return    response
      } )
      );
}
setLoding(status:boolean){
      this.httpLoding=status;
}
getLoding(){
      return this.httpLoding;
}

getPortLocation(city:string){
  this.setLoding(true);
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
let packs=this._packService.getMultiplePacks;
return  this._http.get(this.api+"provinces/p/getPortLocation?city="+city,{headers:headers},).pipe(
      map((response:any) => {
        this.setLoding(false);
      return    response
      } )
      );
}

SingOut(){
    this.setLoding(true);
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
let packs=this._packService.getMultiplePacks;
return  this._http.get(this.api+"account/sign-out",{headers:headers},).pipe(
      map((response:any) => {
        this.setLoding(false);
        localStorage.clear();
      return    response
      } ),
      
      );
}



walletCharge(value:number){
      
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
//https://api.yarbox.co/api/vv2/payment/charge?price=20
return  this._http.get(this.api+"payment/charge?price="+value,{headers:headers}).pipe(
      map((response:any) => {
          
      return    response
      } )
      );
 }
}