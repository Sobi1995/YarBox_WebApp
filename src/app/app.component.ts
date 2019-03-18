import { Component, OnInit } from '@angular/core';
import { authenticationService } from './authentication/authentication-Service';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { fadeAnimation } from './Shared/fade.animation';
import { WebAppService } from './Services/webapp-service';
import  $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent  implements OnInit{
  //test git
  ngOnInit(): void {
    let profile=localStorage.getItem("Profile"); 
    this.jsonProfile = JSON.parse(localStorage.getItem("Profile"));
    if(profile==null){
    this.router.navigate(["/"]);
    this._auth.setIsLogin(false);
    }
    else{
        this._auth.setProfile(this.jsonProfile);
        this._webApp.getPackrunning().subscribe(res=>{
          let count=res.filter(x=> x.isCanceled==false).length
     
if(count==0){
  this.router.navigate(["/map"])
}else{
  this.router.navigate(["/Home"]);
}
 
 
        })
      

    }
  }
  title = 'webapp';
  jsonProfile:any;
  constructor(
    private _auth :authenticationService,
    private router: Router,
    private _webApp:WebAppService){
  

   
  }
  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
  public getLodingStatus(){
  
    return this._webApp.getLoding();
  }
public getIsLogin(){
  
  return this._auth.getIsLogin();
}
  SingOut(){
    this._webApp.SingOut().subscribe(res=>{
      this.jsonProfile=null;
      this._auth.setIsLogin(false);
      this._auth.clearProfile();
      this.router.navigate(["/"])
    })
  }
  hideMnu(){
     
   var classmnu= $('#sidebar-wrapper').attr('class');
 
   var find = classmnu.search("active");
   if(find!=-1)
    $("#sidebar-wrapper").toggleClass("active");

  }
  public getProfile(){
    
    return this._auth.getProfile;
  }
}
