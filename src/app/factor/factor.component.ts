import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebAppService } from '../Services/webapp-service';
import { ProfileDto } from 'src/app/Core/DTO/Profile-dto';
import { PackService } from '../Services/Pack-Service';
import { AcceptSearchDto } from '../Services/accept-search-dto';
import swal from 'sweetalert';
@Component({
  selector: 'app-factor',
  templateUrl: './factor.component.html',
  styleUrls: ['./factor.component.css']
})
export class FactorComponent implements OnInit {
  Factor:any;
  Profile:any;
  payment:number=-1;
  Vehicle:number;
   accept=new AcceptSearchDto();
  constructor(
     private activatedRoute: ActivatedRoute,
     private _webapp:WebAppService,
     private PacksService:PackService,
     private router:Router,
     ) { 

this.Factor={
  id: Number,
  price: Number,
  deliverTime:String,
  content: String,
  isPacking: Boolean,
  isInsurance: false,
  insurance: String,
  vehicle: String,
  vehicleId: String,
  sender: {
    name: String,
    address: String,
    phoneNumber: String
  },
  receiver: {
    name:String,
    address: "",
    phoneNumber: String,
    telephone: String
  },
  packdetails: [
    {
      type: String,
      count: Number
    }
  ]
}


     }

  ngOnInit() {
 
 this.Vehicle=this.PacksService.getVehicle();
    let factore= this.activatedRoute.snapshot.params["key"];
     console.log(factore)
     this.Profile=this.PacksService.getProfile();
    this._webapp.getFactorDatiles(factore).subscribe(res=>{
       
      this.Factor=res;
    })
  }

  paymentType(pay:boolean,chah:boolean){
this.payment=0;
this.accept.payAtOrigin=pay;
this.accept.isCashPayment=chah;

  }
  SerchingDriver(){
    
    if(this.payment==-1)
    {
   
      swal({
        text: "نحوه پرداخت را  انتخاب نماید",
        buttons: ["تاید"],
      });
      return;
    } 
    if(this.accept.isCashPayment==true && this.accept.isCashPayment==true)
    {
      this._webapp.getCheck().subscribe(res=>{
         
        if(parseInt(this.Factor.price)>parseInt(res.credit)){
          
          swal({
            text: "کیف خود را شارژ کنید",
            buttons: ["تاید"],
          });
        }
     
      })
    }
    else{
       
      this.accept.id=this.Factor.id;
      this._webapp.AcceptToSearch(this.accept).subscribe(res=>{
        this.router.navigate(['/search-driver/'+this.Factor.id]) 
      })
    }
  }
}
