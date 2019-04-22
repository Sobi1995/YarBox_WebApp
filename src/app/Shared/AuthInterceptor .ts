import { HttpEvent, 
    HttpInterceptor, 
    HttpHandler, 
    HttpRequest, 
    HttpResponse,
    HttpErrorResponse} from '@angular/common/http';
 
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do'
import { authenticationService } from 'src/app/authentication/authentication-Service';
import { PackService } from '../Services/Pack-Service';
import { WebAppService } from '../Services/webapp-service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router:Router,
   private _auth:authenticationService,
   private _packservice:PackService,
   private _webApp:WebAppService,  ) {

  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let accessToken = localStorage.getItem("access_token");
    if(accessToken)
    {
        request = request.clone({
        setHeaders: {
            Authorization: `Bearer ${accessToken}`
        }
        });
    }
  
    return next.handle(request).do((event: HttpEvent<any>) => {
       
      if (event instanceof HttpResponse) {
     
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
   
        if (err.status === 403) {
            localStorage.clear();
            this._auth.setIsLogin(false);
            this.router.navigate(['/login']);
        }
        else if (err.status==500)
        {
          console.log("500 error");
        }
        this._webApp.setLoding(false);
       
        
      }
    });
  }
}