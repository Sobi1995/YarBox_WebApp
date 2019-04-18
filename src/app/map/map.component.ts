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

 
 zoom: number = 15;
//  markers: marker[]=[];
 // initial center position for the map
 lat: number = 51.673858;
 lng: number = 7.815982;
   savedaddress:any[]=[]

 latDragEnd: string ;
 lngDragEnd: string ;
 Origin:any;
 
//  clickedMarker(label: string, index: number) {
//    console.log(`clicked the marker: ${label || index}`)
//  }

 constructor(
  private _webappservice:WebAppService,
  public _packService:PackService,
  private router:Router,
  location: PlatformLocation){
    location.onPopState(() => {
        history.go(1);
    
  });
}

 ngOnInit(): void {
  this.savedaddress = JSON.parse(localStorage.getItem("Favoriteaddress"));
  this.dragEndSubscription = (this.map._mapsWrapper as GoogleMapsAPIWrapper) 
  .subscribeToMapEvent('dragend')
  .subscribe(() => {

  
    this._webappservice.getCedarmapAddress( this.latDragEnd,this.lngDragEnd).subscribe(res=>{
         
      let   myAddress= res.city + " " + res.district + " " + res.locality + " " + res.place + " " + res.address;
        this._packService.SetAddress(new AddressOrigin(this.latDragEnd,this.lngDragEnd,myAddress))
       console.log( myAddress)
      })

  });
  
 this._packService.clearDestination();
    this.Origin=this._packService.getOrigin();
     
    if(this.Origin.latitude!= undefined && this.Origin.llongitude!=undefined )
    {
      // this.markers=[];
      this.lat=Number(this.Origin.latitude);
      this.lng=Number(this.Origin.llongitude);
      // this.markers.push({
      //   lat: this.Origin.latitude,
      //   lng:   this.Origin.llongitude,
      //   label: 'A',
      //   draggable: true
      // });
       
    
    }
    else{
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
          self._webappservice.getCedarmapAddress(this.lat.toString(),this.lng.toString()).subscribe(res=>{      
            let myAddress= res.city + " " + res.district + " " + res.locality + " " + res.place + " " + res.address;
            this._packService.SetAddress(new AddressOrigin(this.lat.toString(),this.lng.toString(),myAddress))
          
          })
        });
      }
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
      self._webappservice.getCedarmapAddress(this.lat.toString(),this.lng.toString()).subscribe(res=>{      
        let myAddress= res.city + " " + res.district + " " + res.locality + " " + res.place + " " + res.address;
        this._packService.SetAddress(new AddressOrigin(this.lat.toString(),this.lng.toString(),myAddress))
      
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
   this._packService.setAddress(val);
   this._packService.setLatLong(this.lng.toString(),this.lat.toString());
   this.closeModal.nativeElement.click();     
   this.router.navigate(["/destination"])

  //  this.router.navigate(["/destination"])
 }
 onDragEnd($event){
    
 }
 SaveAddress(address :string,title:string){
    
   
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
  this.closeModalfavoriteaddresses.nativeElement.click();  
 }

 SelectAddress(val:any){
   this.lat=val.lat;
   this.lng=val.lng;
 
this._packService.SetAddress(new AddressOrigin( this.lat.toString(), this.lng.toString(),val.address))
this.closeModalSelectAddress.nativeElement.click(); 
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