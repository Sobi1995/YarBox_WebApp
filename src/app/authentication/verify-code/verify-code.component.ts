import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VerifyCode } from '../Model/VerifyCode';
import { authenticationService } from '../authentication-Service';
import swal from 'sweetalert2';
import { PackService } from 'src/app/Services/Pack-Service';



@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.css'],
  
})
export class VerifyCodeComponent implements OnInit,OnDestroy {
  error:string="";
  ngOnDestroy(): void {
 
  }
   VerifyCode:VerifyCode;
   verifyCodengModel:string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private auth:authenticationService,
    private _packService:PackService,
    private router: Router) {
       this.VerifyCode=new  VerifyCode();
      this.VerifyCode.verifyCode=""
       history.pushState(null, null, null);
       window.onpopstate = function () {
           history.go(1);
       };
  
   }

  ngOnInit() {
   if(this.auth.getIsLogin()){
    this.router.navigate(["/"])
     return;
   }
   this.VerifyCode.phoneNumber= this.activatedRoute.snapshot.params["phonenumber"];
  }
  Login( ){
  
    this.VerifyCode.verifyCode

    this.auth.checkVerifyCode(this.VerifyCode).subscribe(res=>{ 
      localStorage.setItem('access_token', res.access_token);
      localStorage.setItem('refresh_token', res.refresh_token);
      this.auth.getProfileOnApi().subscribe(res=>{
        this.auth.setIsLogin(true);
         this.router.navigate([""]);
      })
   

    },(err) => {
      this.error="کد وارد شده صحیح نمی باشد لطفا مجددا تلاش کنید";
    })
  }

  retrysms(){
    this.auth.sendVerifyCode(this.VerifyCode.phoneNumber).subscribe(res=>{
      swal.fire("کد مورد نظر ارسال شد");
      
      
    })
  }
  ngModelChange($event){
     
    this.VerifyCode.verifyCode= this._packService.ToNumEn(this.VerifyCode.verifyCode)
  }
}
