import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebAppService } from '../Services/webapp-service';
import { Router } from '@angular/router';
import { PackService } from '../Services/Pack-Service';

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
countPackRuningInCancelTrue:number;
countPackRuningInCancelFalse:number;
defultMenu:boolean;
  constructor(
    private _webappservice:WebAppService,
    private router: Router,
    private PackService:PackService) { 

    }

  ngOnInit() {
    this.defultMenu=this.PackService.getDefultMenu;
this._webappservice.getPackrunning().subscribe(res=>{
   
  this.PacksRuning=res;
    
  this.countPackRuningInCancelTrue=res.filter(x=> x.isCanceled==true).length
  this.countPackRuningInCancelFalse=res.filter(x=> x.isCanceled==false).length
// if(count==0){
//   this.router.navigate(["/map"])
// }
})
// this.PacksRuning=this._webappservice.getPackrunningOnCache();
  }


  deletePaks(id:number){
     
this._webappservice.deletePack(id).subscribe(res=>{
   
  const index = this.PacksRuning.findIndex(x=> x.id==id);
  if (index > -1) {
    this.PacksRuning.splice(index, 1);
  }
})
  }
}
