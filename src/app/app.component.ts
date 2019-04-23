import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { authenticationService } from './authentication/authentication-Service';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { fadeAnimation } from './Shared/fade.animation';
import { WebAppService } from './Services/webapp-service';
import  $ from 'jquery';
import { SwUpdate } from '@angular/service-worker';
import { ProfileDto } from './Core/DTO/Profile-dto';
import { Observable, fromEvent, merge, of } from 'rxjs';
import { mapTo } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent  implements OnInit{
  //test git
  @ViewChild('ModalProfile') private ModalProfile: ElementRef;  
  @ViewChild('openmodal') private openmodal: ElementRef;
  online$: Observable<boolean>;
  ngOnInit(): void {

     this._auth.IsLoginOnServer().subscribe(res=>{
       
       this._auth.setIsLogin(true);
       this.jsonProfile = JSON.parse(localStorage.getItem("Profile"));
       this._auth.setProfile(this.jsonProfile);
       this._webApp.getPackrunning().subscribe(res=>{
       let count=res.filter(x=> x.isCanceled==false).length
         
// if(count==0){ 
//  //  this.router.navigate(["/map"])
//  this.router.navigate(["/"])
// }else{
//  this.router.navigate(["/base"]);
// }
      if(this.jsonProfile.lastName=="نام خانوادگی"){
        this.openmodal.nativeElement.click();  
      }
})
     },(err) => {
      this._auth.setIsLogin(false);
      this.router.navigate(["/login"]);
    })

  }
  title = 'webapp';
  jsonProfile:any;
  constructor(
    private _auth :authenticationService,
    private router: Router,
    private _webApp:WebAppService,
    public swUpdate: SwUpdate){
  
      if(this.swUpdate.isEnabled)
      {
        this.swUpdate.available.subscribe(()=> {
  
         
          swal({
            title: 'ابدیت جدید',
            text: "برای ابدیت جدید کلیک کنید",
          }).then(()=> {
            window.location.reload();
          })
        })
      }
   
      this.online$ = merge(
        of(navigator.onLine),
        fromEvent(window, 'online').pipe(mapTo(true)),
        fromEvent(window, 'offline').pipe(mapTo(false))
      )
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
      this.router.navigate(["/login"])
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
  UpdateProfiele(lname:string,fname:string){
let profile ={
  firstName: fname,
  lastName: lname,
  phoneNumber: JSON.parse(localStorage.getItem("Profile")).phoneNumber
}
this._webApp.UpdateUser(profile).subscribe(res=>{
 
 
  
  this._auth.getProfileOnApi().subscribe(res=>{
    this.ModalProfile.nativeElement.click();  
  })
})
  }
}
