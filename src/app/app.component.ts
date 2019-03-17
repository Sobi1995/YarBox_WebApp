import { Component, OnInit } from '@angular/core';
import { authenticationService } from './authentication/authentication-Service';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { fadeAnimation } from './Shared/fade.animation';
import { WebAppService } from './Services/webapp-service';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent  implements OnInit{
  //test git
  ngOnInit(): void {
    debugger
    let profile=localStorage.getItem("Profile"); 
    this.jsonProfile = JSON.parse(localStorage.getItem("Profile"));
    if(profile==null)
    this.router.navigate(["/"]);
    else{
      this.jsonProfile = JSON.parse(localStorage.getItem("Profile"));
      this._auth.setProfile(this.jsonProfile);
         this.router.navigate(["/Home"]);

    }
  }
  title = 'webapp';
  jsonProfile:any;
  constructor(
    private _auth :authenticationService,
    private router: Router,
    private _webApp:WebAppService,
   ){
  

   
  }
  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
  public getLodingStatus(){
  
    return this._webApp.getLoding();
  }
 
  SingOut(){
    this._webApp.SingOut().subscribe(res=>{
      this.jsonProfile=null;
      this.router.navigate(["/"])
    })
  }
}
