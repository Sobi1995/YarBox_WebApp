import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { VerifyCode } from './Model/VerifyCode';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProfileDto } from '../Core/DTO/Profile-dto';
import { Router } from '@angular/router';
import { WebAppService } from '../Services/webapp-service';
import { PackService } from '../Services/Pack-Service';
@Injectable()
export class authenticationService{
  private  profile:ProfileDto;
  private IsLogin=true;
  private api:string;
    constructor(
        private _http:HttpClient,
        private router: Router,
        private _webAppService:WebAppService,
        private _packService:PackService){
        this.profile=new ProfileDto();
        this.api="https://api.yarbox.co/api/vv2/";
    }

    sendVerifyCode(phonenumber:String ) {
        this._webAppService.setLoding(true);
        let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json; charset=utf-8');
         var modelphonenumber={
            phoneNumber:phonenumber
         };  
    return   this._http
    .post( this.api+"account/retry-verify",modelphonenumber
    ,{headers:headers})
    .pipe(
     map((response: Response) => {
        this._webAppService.setLoding(false); 
       return response} ,(err:HttpErrorResponse)=>{ return err })
     );
    
    }

    checkVerifyCode(verifycode:VerifyCode):Observable<JwtFormat> {
        // alert(verifycode.verifyCode +"  " +verifycode.phoneNumber)
        this._webAppService.setLoding(true);
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        return   this._http.post<JwtFormat>("https://api.yarbox.co/api/v1/account/verify",verifycode,{headers:headers}).pipe(x=> x);
    }

    LogOut(){
        this._webAppService.setLoding(true);
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        return  this._http.get( this.api+"account/sign-out",{headers:headers}).pipe(
            map((response) => {
                // localStorage.clear();
                this._packService.localstorageClear();
                this._webAppService.setLoding(false);
                this.router.navigate(["/login"]);
                    
               
            } )
            );
    }

    getProfileOnApi():Observable<void>{
        this._webAppService.setLoding(true);
         let headers = new HttpHeaders();
        headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');

      return  this._http.get( this.api+"profile",{headers:headers}).pipe(
            map((response) => {
                  
                this.profile=response as ProfileDto
                this.getCheck().subscribe(res=>{
                    this._webAppService.setLoding(false);
                });
            } )
            );
    }
 
    getCheck():Observable<void>{
        this._webAppService.setLoding(true);
        let headers = new HttpHeaders();
        headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');

      return  this._http.get( this.api+"account/check",{headers:headers}).pipe(
            map((response) => {
                this._webAppService.setLoding(false);
                var check= response as ProfileDto;
                this.profile.credit=check.credit;
                this.profile.score=check.score;
                localStorage.setItem("Profile",JSON.stringify(this.profile))
            } )
            );
    }
  public  get getProfile(){
       
      let profile=JSON.parse(localStorage.getItem("Profile"));
      if(profile!=null)
      return profile
        return this.profile;
    }
    setProfile(profile :ProfileDto){
        this.profile=profile;
    }
    clearProfile(){
        this.profile.credit=null ;
  this.profile.email=null ;
  this.profile.firstName=null ;
  this.profile.lastName=null ;
  this.profile.phoneNumber=null ;
  this.profile.photoUrl=null ;
  this.profile.point=null ;
  this.profile.reagentCode=null ;
  this.profile.score=null ;
    }
    getIsLogin(){
        // return this.IsLogin;
         
        let islogin=JSON.parse(localStorage.getItem("IsLogin"));
        return islogin;
    }
    setIsLogin(status:boolean){
// this.IsLogin=status;
localStorage.setItem("IsLogin",status.toString());
    }


    IsLoginOnServer():Observable<any>{
    
        this._webAppService.setLoding(true);
      let headers = new HttpHeaders();
      headers = headers.set('Authorization', 'bearer ' + localStorage.getItem("access_token"));
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
     
    return  this._http.get( this.api+"account/isLogin",{headers:headers}).pipe(
          map((response:any) => {
            this._webAppService.setLoding(false);
   return  response.items
          } )
          );
   }


   Register(user ) {
    this._webAppService.setLoding(true);
    let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json; charset=utf-8'); 
return   this._http
.post( this.api+"account/register ",user
,{headers:headers})
.pipe(
 map((response: Response) => {
    this._webAppService.setLoding(false); 
   return response} ,(err:HttpErrorResponse)=>{ return err })
 );

}
}

 