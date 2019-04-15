import { Component, OnInit } from '@angular/core';
import { WebAppService } from '../Services/webapp-service';
import { Router, ActivatedRoute } from '@angular/router';

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
    ) { 
    this.startTimer();
  }

  ngOnInit() {
     this.postpackid= this.activatedRoute.snapshot.params["postpackid"];
  }
  startTimer() {
  var  self=this;
    this.interval = setInterval(() => {
      //self.postpackid)
      this._webapp.getSearchDriver(self.postpackid).subscribe(res=>{
if(res!=null){
  alert("راننده پیدا شد")
  this.pauseTimer();
  console.log(res);
  this.router.navigate(["/accept-driver/"+res.mobile])
}
      })
    },10000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
}
