import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WebAppService } from '../Services/webapp-service';
import { MainPacks } from '../Model/dto/Main-Packs-dto';
import { PackService } from '../Services/Pack-Service';
import { Router } from '@angular/router';
import { packsDto } from '../Model/dto/packs-dto';
import { empty } from 'rxjs';
import { delayWhen } from 'rxjs/operators';
 

@Component({
  selector: 'app-post-pack-deities',
  templateUrl: './post-pack-deities.component.html',
  styleUrls: ['./post-pack-deities.component.css']
})
export class PostPackDeitiesComponent implements OnInit {
  @ViewChild('closeModal') private closeModal: ElementRef;
PostPackType:any;
packs:packsDto[]=[]
count:number;
type:number;
mainPacks:MainPacks;
error:boolean=false;
statusInsuranceStatus:boolean=true;
  constructor(
    private _webappservice:WebAppService,
    private _packService:PackService,
    private router:Router) { 
       
    this.mainPacks=new MainPacks()
    this.mainPacks.isPacking=true;
    this.mainPacks.isInsurance=true;
    
  }

  ngOnInit() {
  
    this.type=1;
    this.count=1;
     
    if(this._packService.IsExistpacks()==true){
        
      this.packs=this._packService.getPaks(); 
      this.mainPacks=this._packService.getMainPack();
       
    }else{
      this.mainPacks.insurancePrice=null;
    }
 
    this._webappservice.getPostPackType().subscribe(res=>{
   this.PostPackType=res;
   
console.log(res);
    });
  
  }
  // onSearchChange(searchValue : string ) {  
  //   console.log(searchValue);
  //   this.count= parseInt(searchValue); ;
  // }
  SelectType($event){
    
    this.type=parseInt($event);
    
  }
    AcceptPacks(){
      // setTimeout(function(){
      //   this.closeModal.nativeElement.click(); 
      //  }, 3000);
        
    //this.router.navigate(["/destination"])
     
     if(this.count==null)
     return
      this.packs.push({count:this.count,weightId:this.type,typeId:this.type})
      this._packService.setPaks(this.packs);
      this.closeModal.nativeElement.click();
    }
    getPostPackType(id :number){
     
    if(this.PostPackType!=undefined)
     return this.PostPackType.find(x=> x.id==id).title
    
    }
    InsuranceStatus(status:boolean){
       
      this.mainPacks.isInsurance=status
      this.statusInsuranceStatus=status;
      if(status==false)
      this.mainPacks.insurancePrice=0;
      else
      this.mainPacks.insurancePrice=null;
      this._packService.setMainPaks(this.mainPacks);
     
    }
    getInsuranceStatus(){
      return this.statusInsuranceStatus;
    }
    PackingStatus(status:boolean){
       
   this.mainPacks.isPacking=status;
   this._packService.setMainPaks(this.mainPacks);
    }
    
    deletepack(pack){
      const index = this.packs.indexOf(pack, 0);
if (index > -1) {
  this.packs.splice(index, 1);
}
    }


    // checkValidation(){
        
    //  if(this.packs.length<=0
    //   ||this.mainPacks.isInsurance==true && (this.mainPacks.insurancePrice==undefined || !this.is_Number(this.mainPacks.insurancePrice) ))
 
    //    return true;
      
     
   
    // return false
    // }
    is_Number(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }

    onSubmit() {
       
      // this.error=this.checkValidation();
     if(this.packs.length==0   || this.mainPacks.isInsurance==true && (this.mainPacks.insurancePrice==undefined))return;
     //  if(! this.error){
       debugger
         if(this.mainPacks.content=="")
         this.mainPacks.content="ندارد"
      this._packService.setMainPaks(this.mainPacks);
      this._packService.setPaks(this.packs);
      this.router.navigate(["/choose-vehicle"])
     // }
    }
    CountPacks(type:number){
       
      if(type==0)
      this.count --;
      else
      this.count++;
    }
    Back(){  
    
      this._packService.clearPaks();
      this.router.navigate(['/destination'])
    }
  
}
