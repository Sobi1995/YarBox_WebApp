import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebAppService } from '../Services/webapp-service';
import { PackService } from '../Services/Pack-Service';

@Component({
  selector: 'app-accept-driver',
  templateUrl: './accept-driver.component.html',
  styleUrls: ['./accept-driver.component.css']
})
export class AcceptDriverComponent implements OnInit {
Driver:any;
vehicle:number;
marckerIco:string="/assets/img/logo-ranandeh.png"
// google maps zoom level
zoom: number =15;
markers: marker[]=[];
// initial center position for the map
lat: number = 51.673858;
lng: number = 7.815982;
status:any;
  constructor( 
      private activatedRoute: ActivatedRoute,
      private _webapp:WebAppService,
      private _pack:PackService,
      private router:Router
      ) { }

  ngOnInit() {
  
     this.status=this._pack.getStatusPack;
    this.vehicle=this._pack.getVehicle();
    
  
    let mobile= this.activatedRoute.snapshot.params["mobile"];
    this._webapp.getDriver(mobile).subscribe(res=>{
       
this.Driver=res;
 
this.lat=parseFloat(res.latitude);
this.lng=parseFloat(res.longitude);
this.markers.push({
  lat: parseFloat(res.latitude),
  lng: parseFloat(res.longitude),
  
  draggable: true
});
console.log(res);
    })
  }


clickedMarker(label: string, index: number) {
  console.log(`clicked the marker: ${label || index}`)
}

mapClicked($event: MouseEvent) {
 
}

markerDragEnd(m: marker, $event: MouseEvent) {
  console.log('dragEnd', m, $event);
}

 Back(){
   this._pack.clearLocalStorageEmptyReFlow();
   this.router.navigate(["/base"]);

 }
}
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
