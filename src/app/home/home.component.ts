import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebAppService } from '../Services/webapp-service';
import { Router } from '@angular/router';
import { PackService } from '../Services/Pack-Service';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,  OnDestroy {
  ngOnDestroy(): void {
   this.PackService.setDefultMenu(true);
  }
PacksRuning:any;
PackRuningInCancelFalse:any=null;
PackRuningInCancelTrue:any=null;
defultMenu:boolean;
  constructor(
    private _webappservice:WebAppService,
    private router: Router,
    private PackService:PackService,
    location: PlatformLocation) { 
      location.onPopState(() => {
         
        history.go(1);
  });
    }

  ngOnInit() {
    this.defultMenu=this.PackService.getDefultMenu;
this._webappservice.getPackrunning().subscribe(res=>{
     
  this.PacksRuning=res;
  this.PackRuningInCancelTrue=res.filter(x=> x.isCanceled==true)
  this.PackRuningInCancelFalse=res.filter(x=> x.isCanceled==false)
  
// if(count==0){
//   this.router.navigate(["/map"])
// }
})
// this.PacksRuning=this._webappservice.getPackrunningOnCache();

this._webappservice.getCheck().subscribe(res=>{
  this.PackService.uodateCredit(res.credit);
})
  }


  deletePaks(id:number){
this._webappservice.deletePack(id).subscribe(res=>{
  const index = this.PackRuningInCancelTrue.findIndex(x=> x.id==id);
  if (index > -1) {
    this.PackRuningInCancelTrue.splice(index, 1);
  }
})
  }

  ReOrder(id:number){
this._webappservice.reReorder(id).subscribe(res=>{
   
  this.router.navigate(["/factor/"+res.packKey]);
})
  }
  PackDitile(pack){
    this.PackService.setPackStatus(pack);
this.router.navigate(["/pack-daltile"]);
  }
}
