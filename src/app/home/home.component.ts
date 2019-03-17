import { Component, OnInit } from '@angular/core';
import { WebAppService } from '../Services/webapp-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
PacksRuning:any;
  constructor(
    private _webappservice:WebAppService,
    private router: Router) { }

  ngOnInit() {
this._webappservice.getPackrunning().subscribe(res=>{
  this.PacksRuning=res;
  let count=res.filter(x=> x.isCanceled==false).length
     
if(count==0){
  this.router.navigate(["/map"])
}
  console.log(res);
})
  }

}
