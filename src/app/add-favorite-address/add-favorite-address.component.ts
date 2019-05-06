 
import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
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
  selector: 'app-add-favorite-address',
  templateUrl: './add-favorite-address.component.html',
  styleUrls: ['./add-favorite-address.component.css']
})
export class AddFavoriteAddressComponent implements OnInit ,OnDestroy {
  ngOnDestroy(): void {
    this._packService.setStatusMnuAddressFavourite(false);
    this.closeModalfavoriteaddresses.nativeElement.click();  
    
  }

  @ViewChild(AgmMap) map: any;
  private dragEndSubscription: Subscription;
  @ViewChild('closeModal') private closeModal: ElementRef;
  @ViewChild('closeModalfavoriteaddresses') private closeModalfavoriteaddresses: ElementRef;
    
 // google maps zoom level

  errorAddress:string=null;
 zoom: number = 15;
//  markers: marker[]=[];
 // initial center position for the map
 lat: number = 35.7556095;
 lng: number =51.4127404;
   savedaddress:any[]=[]
address:string;
 latDragEnd: string ;
 lngDragEnd: string ;
 
 
//  clickedMarker(label: string, index: number) {
//    console.log(`clicked the marker: ${label || index}`)
//  }

 constructor(
  private _webappservice:WebAppService,
  public _packService:PackService,
  private router:Router,
  location: PlatformLocation){
 
    history.pushState(null, null, null);
    window.onpopstate = function () {
        history.go(1);
    };
}

 ngOnInit(): void {
  this.savedaddress = JSON.parse(localStorage.getItem("Favoriteaddress"));
  this.dragEndSubscription = (this.map._mapsWrapper as GoogleMapsAPIWrapper) 
  .subscribeToMapEvent('dragend')
  .subscribe(() => {

  
    this._webappservice.getCedarmapAddress( this.latDragEnd,this.lngDragEnd).subscribe(res=>{
         
      let   myAddress= res.city + " " + res.district + " " + res.locality + " " + res.place + " " + res.address;
      this.address=myAddress;
   
        
       console.log( myAddress)
      })

  });

      let self=this;
      if (navigator)
      {
         
      navigator.geolocation.getCurrentPosition( pos => { 

        
        self.lng = +pos.coords.longitude;
        self.lat = +pos.coords.latitude;
          // self.markers=[];
          // self.markers.push({
          //   lat: pos.coords.latitude,
          //   lng:   pos.coords.longitude,
          //   label: 'A',
          //   draggable: true
          // });       
          self._webappservice.getCedarmapAddress(this.lat.toString(),this.lng.toString()).subscribe(res=>{      
            
            let myAddress= res.city + " " + res.district + " " + res.locality + " " + res.place + " " + res.address;
            this.address=myAddress;
         
          
          })
        });
      }
   
 
     
  //   this.map=new google.maps.Map(document.getElementById("googleMap"));
  
  // var b=this.map.getCenter();
}

centerChange($event){
  this.latDragEnd=$event.lat;
  this.lngDragEnd=$event.lng;
 

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
      // self.markers=[];
      // self.markers.push({
      //   lat: pos.coords.latitude,
      //   lng:   pos.coords.longitude,
      //   label: 'A',
      //   draggable: true
      // });       
      self._webappservice.getCedarmapAddress(pos.coords.longitude.toString(),pos.coords.latitude.toString()).subscribe(res=>{      
        let myAddress= res.city + " " + res.district + " " + res.locality + " " + res.place + " " + res.address;
        this.address=myAddress;
      
      })
    });
  }
 }
 
 
 
 
 onDragEnd($event){
    
 }
 SaveAddress(address :string,title:string){
  this._packService.setStatusMnuAddressFavourite(false);
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
  this.router.navigate(["/favorite-address"])

 }

 
}
