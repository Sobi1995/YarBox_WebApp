import { Component, OnInit } from '@angular/core';
import { WebAppService } from '../Services/webapp-service';
import { PackService } from '../Services/Pack-Service';
import { AddressOrigin } from '../Model/Address-Origin';
import $ from 'jquery'
import { google } from '@agm/core/services/google-maps-types';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit  {
 
 
 // google maps zoom level

 
 zoom: number = 15;
 markers: marker[]=[];
 // initial center position for the map
 lat: number = 51.673858;
 lng: number = 7.815982;
 Origin:any;
 map:any;
 clickedMarker(label: string, index: number) {
   console.log(`clicked the marker: ${label || index}`)
 }

 ngOnInit(): void {
    
 this._packService.clearDestination();
    this.Origin=this._packService.getOrigin();
    if(this.Origin.latitude!= undefined && this.Origin.llongitude!=undefined )
    {
      this.markers=[];
      this.lat=this.Origin.latitude;
      this.lng=this.Origin.llongitude;
      this.markers.push({
        lat: this.Origin.latitude,
        lng:   this.Origin.llongitude,
        label: 'A',
        draggable: true
      });
       
    
    }
    else{
      let self=this;
      if (navigator)
      {
         
      navigator.geolocation.getCurrentPosition( pos => {
         
          this.lng = +pos.coords.longitude;
          this.lat = +pos.coords.latitude;
          self.markers=[];
          self.markers.push({
            lat: pos.coords.latitude,
            lng:   pos.coords.longitude,
            label: 'A',
            draggable: true
          });
          
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


 constructor(
   private _webappservice:WebAppService,
   public _packService:PackService){
   

//      


  
 }

 
 mapClicked($event: MouseEvent) {
 
 }
 
 markerDragEnd(m: marker, $event) {
    
  this._webappservice.getCedarmapAddress( $event.coords.lat,$event.coords.lng).subscribe(res=>{
         
  let   myAddress= res.city + " " + res.district + " " + res.locality + " " + res.place + " " + res.address;
    this._packService.SetAddress(new AddressOrigin($event.coords.lat,$event.coords.lng,myAddress))
   console.log( myAddress)
  })
   console.log('dragEnd', m, $event);
 }
 
 AcceptMap(){
  // [routerLink]="['/destination']"
 }
 
}
// just an interface for type safety.
  interface marker {
 lat: number;
 lng: number;
 label?: string;
 draggable: boolean;
}