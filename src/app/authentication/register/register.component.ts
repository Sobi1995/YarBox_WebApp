import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { authenticationService } from '../authentication-Service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
regiserModel:any={};
  constructor(private activatedRoute: ActivatedRoute,
              private auth:authenticationService,
              private router:Router) { 

  }

  ngOnInit() {
    this.regiserModel={
      phoneNumber:"",
      firstName:"",
      reagentCode:"",
      lastName:""
    }
    debugger
    let mobile= this.activatedRoute.snapshot.params["mobile"];
    this.regiserModel.phoneNumber=mobile;
  }
  onSubmit(){
    this.auth.Register(this.regiserModel).subscribe(res=>{
      this.auth.sendVerifyCode(this.regiserModel.phoneNumber).subscribe(res=>{
        this.router.navigate(["/verify-vode/"+this.regiserModel.phoneNumber]);
      })
     
    })
  }

}
