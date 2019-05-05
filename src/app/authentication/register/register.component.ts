import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { authenticationService } from '../authentication-Service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
    this.closemyModal5.nativeElement.click();  
  }
regiserModel:any={};
@ViewChild('closemyModal5') private closemyModal5: ElementRef;
  constructor(private activatedRoute: ActivatedRoute,
              private auth:authenticationService,
              private router:Router) { 
                history.pushState(null, null, null);
                window.onpopstate = function () {
                    history.go(1);
                };

  }

  ngOnInit() {
    this.regiserModel={
      phoneNumber:"",
      firstName:"",
      reagentCode:"",
      lastName:""
    }
    
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
