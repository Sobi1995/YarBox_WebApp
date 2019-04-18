import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { VerifyCode } from './Model/VerifyCode';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProfileDto } from '../Core/DTO/Profile-dto';
import { Router } from '@angular/router';
import { WebAppService } from '../Services/webapp-service';
@Injectable()
export class authenticationService{
  private  profile:ProfileDto;
  private IsLogin=true;
    constructor(
        private _http:HttpClient,
        private router: Router,
        private _webAppService:WebAppService){
        this.profile=new ProfileDto();
    }

    sendVerifyCode(phonenumber:String ) {
        this._webAppService.setLoding(true);
        let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json; charset=utf-8');
         var modelphonenumber={
            phoneNumber:phonenumber
         };  
    return   this._http
    .post("https://api.yarbox.co/api/v1/account/retry-verify",modelphonenumber
    ,{headers:headers})
    .pipe(
     map((response: Response) => {
        this._webAppService.setLoding(false); 
       return response} ,(err:HttpErrorResponse)=>{ return err })
     );
    
    }

    checkVerifyCode(verifycode:VerifyCode):Observable<JwtFormat> {
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
        return  this._http.get("https://api.yarbox.co/api/v1/account/sign-out",{headers:headers}).pipe(
            map((response) => {
                localStorage.clear();
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

      return  this._http.get("https://api.yarbox.co/api/v1/profile",{headers:headers}).pipe(
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

      return  this._http.get("https://api.yarbox.co/api/v1/account/check",{headers:headers}).pipe(
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
        return this.IsLogin;
    }
    setIsLogin(status:boolean){
this.IsLogin=status;
    }
}

 