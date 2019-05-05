import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { PackService } from '../Services/Pack-Service';
import { WebAppService } from '../Services/webapp-service';

@Component({
  selector: 'app-pack-daltile',
  templateUrl: './pack-daltile.component.html',
  styleUrls: ['./pack-daltile.component.css']
})
export class PackDaltileComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
    this.closemyModal6.nativeElement.click();
  }
  @ViewChild('closemyModal6') private closemyModal6: ElementRef;
    PackDitile:any;
    driver:any=null;
  constructor(
    private PackService:PackService,
    private _webApp:WebAppService) { 
      history.pushState(null, null, null);
      window.onpopstate = function () {
          history.go(1);
      };
    }

  ngOnInit() {
    this.PackDitile=this.PackService.getPackStatus;
      
  }
  getDriver(){
this._webApp.getDriverByPackId(this.PackDitile.id).subscribe(res=>{
  this.driver=res;
   
})
  }
}
