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

   
     }
     onSubmit(){
  
      this.auth.sendVerifyCode(this.model.mobile).subscribe(
        data => {
          this.router.navigate(["/verify-vode/"+this.model.mobile]);
        },
        (error) => {
            debugger
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

 
}
