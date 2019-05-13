import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PackService } from './Pack-Service';

import { AcceptSearchDto } from './accept-search-dto';
@Injectable()
export class WebAppService{
 private api:string;
 private httpLoding:boolean=false;     
private packsRuning:any;
 private IsNet:boolean=false;
constructor(private _http:HttpClient,private _packService:PackService){
     this.api="http://localhost:11926/api/vv2/";
  //  this.api="https://api.yarbox.co/api/vv2/";
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
        // localStorage.clear();
        this._packService.localstorageClear();
      return    response
      } ),
      
      );
}



walletCharge(value:number){
      
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
//https://api.yarbox.co/api/vv2/payment/charge?price=20 => this.api+"payment/charge?price="+value
 return  this._http.get("https://api.yarbox.co/api/v1/payment/charge?price="+value,{headers:headers}).pipe(
      map((response:any) => {
          
      return    response
      } )
      );
 }



 deletePack(id:number){
  this.setLoding(true);
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
let packs=this._packService.getMultiplePacks;
return  this._http.get(this.api+"packs/remove?id="+id,{headers:headers},).pipe(
      map((response:any) => {
        this.setLoding(false);
      return    response
      } )
      );
}


getUserMessages(){
  this.setLoding(true);
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
let packs=this._packService.getMultiplePacks;
return  this._http.get(this.api+"/messages",{headers:headers},).pipe(
      map((response:any) => {
        this.setLoding(false);
      return    response
      } )
      );
}
getWallet(){
  this.setLoding(true);
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
let packs=this._packService.getMultiplePacks;
return  this._http.get(this.api+"/wallets",{headers:headers},).pipe(
      map((response:any) => {
        this.setLoding(false);
      return    response
      } )
      );
}

getPaid(){
  this.setLoding(true);
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
let packs=this._packService.getMultiplePacks;
return  this._http.get(this.api+"/wallets/paid",{headers:headers},).pipe(
      map((response:any) => {
        this.setLoding(false);
      return    response
      } )
      );
}


cancelPack(id:number){
  this.setLoding(true);
   let headers = new HttpHeaders();
   headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
   headers = headers.set('Content-Type', 'application/json; charset=utf-8');
 
 return  this._http.post(this.api+"packs/cancelpostpackcustomer?id="+id,null,{headers:headers},).pipe(
       map((response:any) => {
        this.setLoding(false);
       return    response
       } )
       );
}

UpdateUser(profile:any){
  this.setLoding(true);
  let headers = new HttpHeaders();

  headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
 
return  this._http.put(this.api+"profile",profile,{headers:headers}).pipe(
      map((response:any) => {
        this.setLoding(false);
      return    response
      } )
      );
}
setIsNet(status:boolean){
  this.IsNet=status;
}
get getIsNet(){
  return this.IsNet;
}

reReorder(id:number):Observable<any>{
    
  this.setLoding(true);
let headers = new HttpHeaders();
headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
headers = headers.set('Content-Type', 'application/json; charset=utf-8');

return  this._http.get(this.api+"packs/alopeyk/"+id+"/re-order",{headers:headers}).pipe(
    map((response:any) => {
return response
    } )
    );
}
 

getCityOnGoogleApi(val:string):Observable<any>{
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
return  this._http.get(this.api+"/Map/SearchAddress?address="+val,{headers:headers}).pipe(
    map((response:any) => {
return response
    } )
    );
}

getPlaseById(plaseid:string):Observable<any>{
  return  this._http.get(this.api+"/Map/getPlaseId?plaseid="+plaseid).pipe(
      map((response:any) => {
  return response
      } )
      );
  }

getDriverByPackId(packid:number):Observable<any>{
    
  this.setLoding(true);
let headers = new HttpHeaders();
headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
headers = headers.set('Content-Type', 'application/json; charset=utf-8');

return  this._http.get(this.api+"/driver/getDriverByPostpackId?postid="+packid,{headers:headers}).pipe(
    map((response:any) => {
      this.setLoding(false);
return response
    } )
    );
}

}