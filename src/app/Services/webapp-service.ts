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

this.api="http://api.yarbox.co/api/";
}
 

 
 getCities(provinces:string,type:number):Observable<any>{
    
      this.setLoding(true);
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
   
  return  this._http.get(this.api+"v1/provinces/"+provinces+"/GetCityByType?type="+type,{headers:headers}).pipe(
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

  return  this._http.get(this.api+"v1/provinces",{headers:headers}).pipe(
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

   return  this._http.get(this.api+"v1/packs/running",{headers:headers}).pipe(
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

  return  this._http.get(this.api+"v1/pack-data/types",{headers:headers}).pipe(
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

return  this._http.get(this.api+"/v1/account/check",{headers:headers}).pipe(
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
     return  this._http.post(this.api+"v1/packs/MultiplePacks",packs,{headers:headers},).pipe(
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
    return  this._http.get(this.api+"/vv2/packs/factor/"+key,{headers:headers},).pipe(
          map((response:any) => {
            this.setLoding(false);
          return    response
          } )
          );
}

getSearchDriver(packid:number){
      this.setLoding(true);
           let headers = new HttpHeaders();
      headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
  let packs=this._packService.getMultiplePacks;
    return  this._http.post(this.api+"vv2/driver/AcceptedCarrierInfo?postPackId="+packid,null,{headers:headers},).pipe(
          map((response:any) => {
            this.setLoding(false);
          return    response
          } )
          );
}
getDriver(mobile:string){
      this.setLoding(true);
      let headers = new HttpHeaders();
 
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
  let packs=this._packService.getMultiplePacks;
    return  this._http.post(this.api+"vv2/driver/profile?mobile="+mobile,null,{headers:headers},).pipe(
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
 
return  this._http.post(this.api+"/vv2/packs/accept",acceptsearch,{headers:headers}).pipe(
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
return  this._http.get(this.api+"vv2/provinces/p/getPortLocation?city="+city,{headers:headers},).pipe(
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
return  this._http.get(this.api+"vv2/account/sign-out",{headers:headers},).pipe(
      map((response:any) => {
        this.setLoding(false);
        localStorage.clear();
      return    response
      } ),
      
      );
}
}