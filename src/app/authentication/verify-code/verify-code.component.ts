import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VerifyCode } from '../Model/VerifyCode';
import { authenticationService } from '../authentication-Service';
import swal from 'sweetalert2';



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
  constructor(
    private activatedRoute: ActivatedRoute,
    private auth:authenticationService,
 
    private router: Router) {
       this.VerifyCode=new  VerifyCode();
  
   }

  ngOnInit() {
   if(this.auth.getIsLogin()){
    this.router.navigate(["/"])
     return;
   }
   this.VerifyCode.phoneNumber= this.activatedRoute.snapshot.params["phonenumber"];
  }
  Login(verifycodeinput:string){
     
    this.VerifyCode.verifyCode=verifycodeinput;

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
}
