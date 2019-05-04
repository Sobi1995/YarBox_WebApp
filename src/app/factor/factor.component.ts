import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebAppService } from '../Services/webapp-service';
import { ProfileDto } from 'src/app/Core/DTO/Profile-dto';
import { PackService } from '../Services/Pack-Service';
import { AcceptSearchDto } from '../Services/accept-search-dto';
import swal from 'sweetalert2';


@Component({
  selector: 'app-factor',
  templateUrl: './factor.component.html',
  styleUrls: ['./factor.component.css']
})
export class FactorComponent implements OnInit,OnDestroy {
  @ViewChild('closeModal') private closeModal: ElementRef;
  ngOnDestroy(): void {
    this.closeModal.nativeElement.click();
  }
  Factor:any;
  credit:number=0;
  payment:number=-1;
  Vehicle:number;
  Profile:any;
   accept=new AcceptSearchDto();
  constructor(
     private activatedRoute: ActivatedRoute,
     private _webapp:WebAppService,
     private PacksService:PackService,
     private router:Router,
     ) { 
      this.Profile = JSON.parse(localStorage.getItem("Profile"));
       
this.Factor={
  id: 0,
  price: 0,
  deliverTime:"",
  content: "",
  isPacking: false,
  isInsurance: false,
  insurance: "",
  vehicle: "",
  vehicleId: "",
  sender: {
    name: "",
    address: "",
    phoneNumber: this.Profile.phoneNumber
  },
  receiver: {
    name:"",
    address: "",
    phoneNumber: "",
    telephone: ""
  },
  packdetails: [
    {
      type: "",
      count: 0
    }
  ]
}


     }

  ngOnInit() {

 this.Vehicle=this.PacksService.getVehicle();
    let factore= this.activatedRoute.snapshot.params["key"];
     console.log(factore)
      
   
  
    this._webapp.getFactorDatiles(factore).subscribe(res=>{
        
      this.Factor=res;
    })
    this._webapp.getCheck().subscribe(res=>{
      this.credit=+res.credit;
      this.PacksService.uodateCredit(res.credit);
    })
  }

  paymentType(pay,chah){
     
    if(chah==0)
    chah=false;
this.payment=0;
this.accept.payAtOrigin=pay;
this.accept.isCashPayment=chah;

  }
  SerchingDriver(){
     
    if(this.payment==-1)
    {
   
      swal.fire({text: "نحوه پرداخت را  انتخاب نماید"});
      return;
    } 
    if(this.accept.isCashPayment==true && this.accept.isCashPayment==true)
    {
      this._webapp.getCheck().subscribe(res=>{
          
        if(parseInt(this.Factor.price)>parseInt(res.credit)){
          swal.fire({text: "کیف خود را شارژ کنید"});
        }
     else{
      this.accept.id=this.Factor.id;
      this._webapp.AcceptToSearch(this.accept).subscribe(res=>{
        this.PacksService.setStatusPay(this.accept);
        this.router.navigate(['/search-driver/'+this.Factor.id]) 
      })
     }
      })
    }
    else{
       
      this.accept.id=this.Factor.id;
      this._webapp.AcceptToSearch(this.accept).subscribe(res=>{
        this.PacksService.setStatusPay(this.accept);
        this.router.navigate(['/search-driver/'+this.Factor.id]) 
      })
    }
  }
  Back(){
    let back=this.PacksService.getBackStatusFacktore;
    if(back==true)
    {
      this.router.navigate(["/base"])
    }
    else{
      this.router.navigate(["/choose-vehicle"])
    }
  }
}
