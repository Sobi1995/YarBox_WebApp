import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WebAppService } from '../Services/webapp-service';
import { PackService } from '../Services/Pack-Service';
import { AddressOrigin } from '../Model/Address-Origin';
import $ from 'jquery'
import { google } from '@agm/core/services/google-maps-types';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { AgmMap, GoogleMapsAPIWrapper } from '@agm/core';
import { PlatformLocation } from '@angular/common';
import { originDto } from '../Model/dto/origin-dto';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit  {
  @ViewChild(AgmMap) map: any;
  private dragEndSubscription: Subscription;
  @ViewChild('closeModal') private closeModal: ElementRef;
  @ViewChild('closeModalfavoriteaddresses') private closeModalfavoriteaddresses: ElementRef;
  @ViewChild('closeModalSelectAddress') private closeModalSelectAddress: ElementRef;
 // google maps zoom level
 errorAddress:string=null;
 googleAddressAutoComplate:any;
 zoom: number = 15;
 lat: number = null;
 lng: number =null;
savedaddress:any[]=[]
 latDragEnd: string ;
 lngDragEnd: string ;
 Origin:originDto;
 tryFlow:string;
//  clickedMarker(label: string, index: number) {
//    console.log(`clicked the marker: ${label || index}`)
//  }

 constructor(
  private _webappservice:WebAppService,
  public _packService:PackService,
  private router:Router,
  location: PlatformLocation){
    this.Origin=new originDto();
    history.pushState(null, null, null);
    window.onpopstate = function () {
        history.go(1);
    };
}

 ngOnInit(): void {

 this.tryFlow=this._packService.getRetryFlow
  
  this._packService.setBackStatusFacktore(false);
// this._packService.setOnLocalStorageEmpty();
 
  this.savedaddress = JSON.parse(localStorage.getItem("Favoriteaddress"));
  this.dragEndSubscription = (this.map._mapsWrapper as GoogleMapsAPIWrapper) 
  .subscribeToMapEvent('dragend')
  .subscribe(() => {

  
    this._webappservice.getCedarmapAddress( this.latDragEnd,this.lngDragEnd).subscribe(res=>{
           
      let   myAddress= res.city + " " + res.district + " " + res.locality + " " + res.place + " " + res.address;
      this.Origin.street=myAddress;
        this._packService.SetAddress(new AddressOrigin(this.latDragEnd,this.lngDragEnd,myAddress))
        
       console.log( myAddress)
      })

  });
  

    
    this.Origin=this._packService.getOrigin();
     this.Origin.street= this.Origin.street;
     
    if(this.Origin.latitude!= undefined && this.Origin.llongitude!=undefined )
    {
      // this.markers=[];
      this.lng=Number(this.Origin.latitude);
      this.lat=Number(this.Origin.llongitude);
    }
    else{
      let self=this;
      
      if (navigator)
      {
         
      navigator.geolocation.getCurrentPosition( pos => {        
         
          this.lng = +pos.coords.longitude;
          this.lat = +pos.coords.latitude;
          this.lngDragEnd=pos.coords.longitude.toString();
          this.latDragEnd=pos.coords.latitude.toString();
          // self.markers=[];
          // self.markers.push({
          //   lat: pos.coords.latitude,
          //   lng:   pos.coords.longitude,
          //   label: 'A',
          //   draggable: true
          // });       
          self._webappservice.getCedarmapAddress(pos.coords.latitude.toString(),pos.coords.longitude.toString()).subscribe(res=>{      
             
            let myAddress= res.city + " " + res.district + " " + res.locality + " " + res.place + " " + res.address;
            this.Origin.street=myAddress;
            this._packService.SetAddress(new AddressOrigin(pos.coords.latitude.toString(),pos.coords.longitude.toString()))
          
          })
        });
  if(this.lat==null)
  {
    this.lng = 51.412316399999995;
    this.lat = 35.7553324 ;
    this.lngDragEnd =this.lng.toString();
    this.latDragEnd=this.lat.toString();
    this.Origin.street="تهران منطقه ۳ کاووسیه  شانزدهم - گاندی جنوبی"
  }
      } 
    }
 
     
  //   this.map=new google.maps.Map(document.getElementById("googleMap"));
  
  // var b=this.map.getCenter();
}

centerChange($event){
  this.latDragEnd=$event.lat;
  this.lngDragEnd=$event.lng;
 this.lat=null;
 this.lng=null;
 this.googleAddressAutoComplate=null;
 
  
}

 destnation(){
  setTimeout(function(){ }, 3000);
  this.closeModal.nativeElement.click();     
//this.router.navigate(["/destination"])
 }
 mapClicked($event: MouseEvent) {
 
 }
 myLocation(){
    
  let self=this;
  if (navigator)
  {
     
  navigator.geolocation.getCurrentPosition( pos => { 

     
    this.lng = +pos.coords.longitude;
    this.lat = +pos.coords.latitude;
  
      self._webappservice.getCedarmapAddress(pos.coords.latitude.toString(),pos.coords.longitude.toString()).subscribe(res=>{ 
         
        let myAddress= res.city + " " + res.district + " " + res.locality + " " + res.place + " " + res.address;
        self._packService.SetAddress(new AddressOrigin( pos.coords.latitude.toString(),pos.coords.longitude.toString(),myAddress))
        self.Origin.street=myAddress;
      
      })
    });
  }
 }
 markerDragEnd(m: marker, $event) {
    
  this._webappservice.getCedarmapAddress( $event.coords.lat,$event.coords.lng).subscribe(res=>{
          
  let   myAddress= res.city + " " + res.district + " " + res.locality + " " + res.place + " " + res.address;
    this._packService.SetAddress(new AddressOrigin($event.coords.lat,$event.coords.lng,myAddress))
   console.log( myAddress)
  })
 
 }
 
 
 AcceptAddress(val:string){
 if(val=="")return
 if(this.latDragEnd==undefined){
   this.latDragEnd= this.lat.toString();
   this.lngDragEnd= this.lng.toString();
 }
  
   this._packService.setAddress(val);
   this._packService.setLatLong(this.latDragEnd.toString(),this.lngDragEnd.toString());
   this.closeModal.nativeElement.click();     
   this._packService.clearLocalStorageEmptyReFlow().subscribe(res=>{
    this.router.navigate(["/destination"])
   });


  //  this.router.navigate(["/destination"])
 }
 onDragEnd($event){
    
 }
 SaveAddress(address :string,title:string){
    if(address=="" || title ==""){
    this.errorAddress="لطفا عنوان را وارد کنید"
  return}
    
   let fs:any={
     title:title,
     address:address,
     lat:this.latDragEnd,
     lng:this.lngDragEnd
   }
 
   
    this.savedaddress = JSON.parse(localStorage.getItem("Favoriteaddress"));
  if(this.savedaddress==null)
  this.savedaddress=Array.of(fs);
  else
  this.savedaddress.push(fs)
  localStorage.setItem("Favoriteaddress",JSON.stringify(this.savedaddress));
  this.errorAddress=null;
  this.closeModalfavoriteaddresses.nativeElement.click();  
 }

 SelectAddress(val:any){
   this.lat=val.lat;
   this.lng=val.lng;
 
this._packService.SetAddress(new AddressOrigin( this.lat.toString(), this.lng.toString(),val.address))
this.closeModalSelectAddress.nativeElement.click();
this.router.navigate(["/destination"])
 }
 EmptyInput(){
  this.Origin.street=""
 }
 onSearchChange(val:string){
 
   if(val.length<2)
   return
this._webappservice.getCityOnGoogleApi(val).subscribe(res=>{
   
console.table(res.predictions)
  this.googleAddressAutoComplate=res.predictions;
   
})
 }
   splitCity(val){
 return  val.structured_formatting.main_text
 
 }
 getByPlaseId(plaseid:string){
   this._webappservice.getPlaseById(plaseid).subscribe(res=>{
    
    this.lat=res.result.geometry.location.lat;
    this.lng=res.result.geometry.location.lng;
  this._webappservice.getCedarmapAddress(res.result.geometry.location.lat,res.result.geometry.location.lng).subscribe(res=>{
    let   myAddress= res.city + " " + res.district + " " + res.locality + " " + res.place + " " + res.address;
  this.googleAddressAutoComplate=null;
   this. Origin.street=myAddress
  })
   })
 }
IsTehran(description:string){
  var array = description.split(",");
 if(array[0]=='Tehran Province')
 return true
 else
 return false
}

goOnFlow(){
  this.router.navigate([this.tryFlow])
}
}
// just an interface for type safety.
  interface marker {
 lat: number;
 lng: number;
 label?: string;
 draggable: boolean;
}


interface Favoriteaddress {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
 }