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
  debugger
  this.PacksRuning=res;
  let count=res.filter(x=> x.isCanceled==false).length
if(count==0){
  this.router.navigate(["/map"])
}
})
this.PacksRuning=this._webappservice.getPackrunningOnCache();
  }


  deletePaks(id:number){
    debugger
this._webappservice.deletePack(id).subscribe(res=>{
  debugger
  const index = this.PacksRuning.findIndex(x=> x.id==id);
  if (index > -1) {
    this.PacksRuning.splice(index, 1);
  }
})
  }
}
