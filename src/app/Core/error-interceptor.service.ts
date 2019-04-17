import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

 

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor( ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      return next.handle(req).do((event: HttpEvent<any>)  => {},
      (err: any) => {
 
        if (err instanceof HttpErrorResponse) {

          if (err.status === 401 || err.status == 403) {
  
          }
        }
      });
    }
}