import { Component, OnInit } from "@angular/core";
import { WebAppService } from "../Services/webapp-service";
import { FactoreOnlineDto } from '../Core/DTO/FactoreOnlineDto';
import swal from 'sweetalert2';
@Component({
  selector: "app-factoronline",
  templateUrl: "./factoronline.component.html",
  styleUrls: ["./factoronline.component.css"]
})
export class FactoronlineComponent implements OnInit {
  Cities: any;
  FactoreModel: FactoreOnlineDto;
  typeCity: number;
  Provinces: any;
  PostPackType: any;
  res:string;
  constructor(private _webappService: WebAppService) {
    this.FactoreModel =new  FactoreOnlineDto() 
 
  }

  ngOnInit() {
  
  
 

    this._webappService.getProvinces().subscribe(res => {
      this.Provinces = res;
    });
    this._webappService.getPostPackType().subscribe(res => {
      this.PostPackType = res;

      console.log(res);
    });
    
  }
  SelectProvince(province: string) {
    this._webappService.getCities(province, this.typeCity).subscribe(res => {
      this.FactoreModel.country = province;
      this.Cities = res;
    });
  }

  SelectCitiType($event) {
    this.typeCity = $event;
  }

  SelectCity($event) {
    this.FactoreModel.countis = $event;
  }
  SelectTypePack($event) {
    this.FactoreModel.weightId = $event;
  }

  modelChanged(newObj) {
    debugger
    this.FactoreModel.weightId = newObj
  }
  onSubmit(){
    debugger
    if(this.FactoreModel.country==undefined ||
      this.FactoreModel.country=="استان مقصد" ||
      this.FactoreModel.countis==undefined ||
      this.FactoreModel.count<=0 ||
      this.FactoreModel.count==undefined ||
      this.FactoreModel.weightId==undefined ||
      this.FactoreModel.country=="شهر مقصد" 
      ){
        swal.fire({text: "لطفا فیلد ها را پر کنید"});
      }
    this._webappService.FactoreOnline(this.FactoreModel).subscribe(res=>{
this.res=res;
    })
  }
}
