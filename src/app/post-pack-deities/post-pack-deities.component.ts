import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WebAppService } from '../Services/webapp-service';
import { MainPacks } from '../Model/dto/Main-Packs-dto';
import { PackService } from '../Services/Pack-Service';
import { Router } from '@angular/router';
import { packsDto } from '../Model/dto/packs-dto';
 

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
    this.count=this.type=1;
     this._packService.clearVehicle();
    if(this._packService.IsExistpacks()==true){
      this.packs=this._packService.getPaks();
      this.mainPacks=this._packService.getMainPack();
     
    }
    
    this._webappservice.getPostPackType().subscribe(res=>{
   this.PostPackType=res;
  
console.log(res);
    });
  }
  onSearchChange(searchValue : string ) {  
    console.log(searchValue);
    this.count= parseInt(searchValue); ;
  }
  SelectType($event){
    
    this.type=parseInt($event);
    
  }
    AcceptPacks(){
      // setTimeout(function(){
      //   this.closeModal.nativeElement.click(); 
      //  }, 3000);
        
    //this.router.navigate(["/destination"])
     
    
      this.packs.push({count:this.count,weightId:this.type,typeId:this.type})
    }
    getPostPackType(id :number){
    
     return this.PostPackType.find(x=> x.id==id).title
    
    }
    InsuranceStatus(status:boolean){
      this.mainPacks.isInsurance=status
      this.statusInsuranceStatus=status;
    }
    getInsuranceStatus(){
      return this.statusInsuranceStatus;
    }
    PackingStatus(status:boolean){
       
   this.mainPacks.isPacking=status;
    }
    AcceptPack(){

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
      debugger
      // this.error=this.checkValidation();
     if(this.packs.length==0 || this.mainPacks.content=="" || this.mainPacks.isInsurance==true && (this.mainPacks.insurancePrice==undefined))return;
     //  if(! this.error){
         
         this.mainPacks.content="ندارد"
      this._packService.setMainPaks(this.mainPacks);
      this._packService.setPaks(this.packs);
      this.router.navigate(["/choose-vehicle"])
     // }
    }
}
