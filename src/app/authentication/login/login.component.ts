import { Component, OnInit,OnDestroy } from '@angular/core';
import { authenticationService } from '../authentication-Service';
import { Router } from '@angular/router';
import '../../Shared/extension-methods-ToEnglishNumber';
import { HttpErrorResponse } from '@angular/common/http';
import { PackService } from 'src/app/Services/Pack-Service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit,OnDestroy {
error:String=null;
model: any = {};
  ngOnDestroy(): void {
  this.model={
    model:String
  }
  }
 
  constructor(
    private auth:authenticationService,
    private router: Router,
    private _packService:PackService
  ) {
    history.pushState(null, null, null);
    window.onpopstate = function () {
        history.go(1);
    };
   this._packService.setOnLocalStorageEmpty();
     }
     onSubmit(){
        
 //^(\+98|0)?9\d{9}$
 
 this.model.mobile=this._packService.ToNumEn(this.model.mobile);
 
 
  if(! /^(\+98|0)?9\d{9}$/.test(this.model.mobile)){
    this.error="لطفا فرمت شماره تماس را درست وارد کنید"
    return
  }
 
      this.auth.sendVerifyCode(this._packService.ToNumEn(this.model.mobile)).subscribe(
        data => {
          this.router.navigate(["/verify-vode/"+this.model.mobile]);
        },
        (error) => {
             
 if(error.error.errorMessage!=undefined){
 this.error=  "شماره شما مجاز به ثبت نام نمی باشد" 
 
 }
 else if(error.error.message!=undefined){

  this.router.navigate(["/register/"+this.model.mobile])
}
 
 
 
          
        });
     }
  ngOnInit() {
  }

  ngModelChange($event){
    
this.model.mobile=this._packService.ToNumEn(this.model.mobile);
  }
}
