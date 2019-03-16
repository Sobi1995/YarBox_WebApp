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
  ngOnDestroy(): void {
  ;
  }
 
  constructor(
    private auth:authenticationService,
    private router: Router,
  ) {

   
     }

  ngOnInit() {
  }

  sendCode(phonenumber:string){
  
       this.auth.sendVerifyCode(phonenumber).subscribe(
        data => {
          this.router.navigate(["/verify-vode/"+phonenumber]);
        },
        (error) => {
           
 if(error.error.errorMessage!=undefined){
  alert("شما هنوز ثبت نام نکرده اید")
 
 }
 else if(error.error.message!=undefined){

  alert("شماره همراه را درست وارد کنید")
}
 
 console.log(error)
          
        });
  }

}
