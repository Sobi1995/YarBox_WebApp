import { Component, OnInit } from '@angular/core';
import { WebAppService } from '../Services/webapp-service';
import { Router, ActivatedRoute } from '@angular/router';
import { PackService } from '../Services/Pack-Service';
import { PlatformLocation } from '@angular/common';
@Component({
  selector: 'app-search-driver',
  templateUrl: './search-driver.component.html',
  styleUrls: ['./search-driver.component.css']
})
export class SearchDriverComponent implements OnInit {
  timeLeft: number = 60;
  interval;
  postpackid:number;
  constructor(
    private _webapp:WebAppService,
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private PackService:PackService,
    location: PlatformLocation
    
    ) { 
      history.pushState(null, null, null);
      window.onpopstate = function () {
          history.go(1);
      };
    this.startTimer();
    this.PackService.clearDestination();
  }

  ngOnInit() {
     this.postpackid= this.activatedRoute.snapshot.params["postpackid"];
  }
  startTimer() {
  var  self=this;
    this.interval = setInterval(() => {

      this._webapp.getSearchDriver(self.postpackid).subscribe(res=>{
if(res!=null){
  this.pauseTimer();
  console.log(res);
  this.router.navigate(["/accept-driver/"+res.mobile])
}
else{
  this.startTimer();
}
      })
      this.pauseTimer();
    },10000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  cancelPack(){
    this.PackService.setOnLocalStorageEmpty();
    this.pauseTimer();
    this._webapp.cancelPack(this.postpackid).subscribe(res=>{
      this.PackService.setDefultMenu(false);
      this.router.navigate(["/base"])
    })
  }
}
