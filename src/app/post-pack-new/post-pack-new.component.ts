import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { MainPacks } from "../Model/dto/Main-Packs-dto";
import { WebAppService } from "../Services/webapp-service";
import { PackService } from "../Services/Pack-Service";
import { Router } from "@angular/router";
import { packsDto } from "../Model/dto/packs-dto";

@Component({
  selector: "app-post-pack-new",
  templateUrl: "./post-pack-new.component.html",
  styleUrls: ["./post-pack-new.component.css"]
})
export class PostPackNewComponent implements OnInit {
  @ViewChild("closeModal") private closeModal: ElementRef;
  PostPackType: any;
  packs: packsDto[] = [];
  count: number;
  type: number;
  mainPacks: MainPacks;
  error: boolean = false;
  TypePack: any="1";
  Error: Array<any>;
  statusInsuranceStatus: boolean = true;
  constructor(
    private _webappservice: WebAppService,
    private _packService: PackService,
    private router: Router
  ) {
    this.mainPacks = new MainPacks();
    this.mainPacks.isPacking = true;
    this.mainPacks.isInsurance = true;
    this.Error = new Array<any>();
    history.pushState(null, null, null);
    window.onpopstate = function() {
      history.go(1);
    };
  }

  ngOnDestroy(): void {
    // this.closeModal.nativeElement.click();
  }
  ngOnInit() {
    this._webappservice.setLoding(true);
    setTimeout(() => {
      this.type = 1;
      this.count = 1;

      if (this._packService.IsExistpacks() == true) {
        this.packs = this._packService.getPaks();
        this.mainPacks = this._packService.getMainPack();
        this.count=this.mainPacks.count;
        if(this.mainPacks.PostPackWeight==0)
        this.TypePack="0"
       else
       this.TypePack="1"
      } else {
        this.mainPacks.insurancePrice = null;
       
      }

      this._webappservice.getPostPackType().subscribe(res => {
        this.PostPackType = res;

        console.log(res);
      });
      this._webappservice.setLoding(false);

    }, 1500);
  }
  PackingStatus(status: boolean) {
    this.mainPacks.isPacking = status;
    this._packService.setMainPaks(this.mainPacks);
  }

  onSubmit() {
    // this.error=this.checkValidation();
     
    this.Error=[];
    if (
      this.mainPacks.isInsurance == true &&
      this.mainPacks.insurancePrice == undefined
    )
      return;
 
    if (this.mainPacks.PostPackWeight > 500) {
      this.Error.push("وزن بیشتر از 500 کیلو است");
      return;
    }
    if (this.TypePack == "1" && this.mainPacks.PostPackWeight == 0) {
      this.Error.push("وزن را وارد کنید");
      return;
    }
    if(this.mainPacks.PostPackWeight !=null && !this.isInteger(this.mainPacks.PostPackWeight)){
      this.Error.push("وزن را اعداد صحیح وارد کنید");
      return;
    }
    if (this.TypePack == "1" && this.count == 0) {
      this.Error.push("تعداد را وارد کنید");
      return;
    }
    if (( this.mainPacks.PostPackWeight/this.mainPacks.count)>35 && this.TypePack==1) {
      this.Error.push("حداکثر هر مرسوله  35 کیلوگرم میباشد");
      return;
    }
    if (this.mainPacks.content == "") this.mainPacks.content = "ندارد";
    if (this.TypePack == "0" || this.TypePack ==undefined) this.mainPacks.PostPackWeight = 0;
    this.mainPacks.insurancePrice = +this._packService.ToNumEn(
      this.mainPacks.insurancePrice.toString()
    );
      
    if(this.TypePack==0){
      this.mainPacks.count=1;
    }
     
    this._packService.setMainPaks(this.mainPacks);
    this._packService.setPaks(this.packs);
    this.router.navigate(["/choose-vehicle"]);
    // }
  }
  Back() {
    this._packService.clearPaks();
    this.router.navigate(["/destination"]);
  }
  InsuranceStatus(status: boolean) {
    this.mainPacks.isInsurance = status;
    this.statusInsuranceStatus = status;
    if (status == false) this.mainPacks.insurancePrice = 0;
    else this.mainPacks.insurancePrice = null;
    this._packService.setMainPaks(this.mainPacks);
  }
  getInsuranceStatus() {
    return this.statusInsuranceStatus;
  }
  onSelectedChange(value) {}

  handleChangeType(evt) {
  
  }
checknull(obj){
   
  if(obj==null || obj ==undefined)
  return true
  else
  return false
}

  incCount(){
 
    this.count++;
    this.mainPacks.count=this.count;
  }
  decCount(){
   if(this.count>1)
  {this.count--;
  
  }
  this.mainPacks.count=this.count;
  }
    isInteger(a){
    return a >= 1e+21 ? true : a === (a|0)
}
}
