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

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router:Router,
   private _auth:authenticationService  ) {

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
            this.router.navigate(['/']);
        }
      }
    });
  }
}