import { Component, OnInit,OnDestroy } from '@angular/core';
import { authenticationService } from '../authentication-Service';
import { Router } from '@angular/router';

import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit,OnDestroy {
error:String="";
model: any = {};
  ngOnDestroy(): void {
  this.model={
    model:String
  }
  }
 
  constructor(
    private auth:authenticationService,
    private router: Router,
  ) {
    history.pushState(null, null, null);
    window.onpopstate = function () {
        history.go(1);
    };
   
     }
     onSubmit(){
   
      this.auth.sendVerifyCode("0"+this.model.mobile).subscribe(
        data => {
          this.router.navigate(["/verify-vode/"+"0"+this.model.mobile]);
        },
        (error) => {
             
 if(error.error.errorMessage!=undefined){
 this.error=  "شماره شما مجاز به ثبت نام نمی باشد" 
 
 }
 else if(error.error.message!=undefined){

  this.router.navigate(["/register/"+"0"+this.model.mobile])
}
 
 
 
          
        });
     }
  ngOnInit() {
  }

 
}
