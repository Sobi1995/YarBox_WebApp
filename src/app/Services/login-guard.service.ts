import { Injectable } from '@angular/core';
import { authenticationService } from '../authentication/authentication-Service';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService {

  constructor(private identityService: authenticationService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      console.log(!this.identityService.getIsLogin())
        if (this.identityService.getIsLogin()) { // determine if the uder is logged in from this method.
            return true;
        }
        // this.router.navigate(['/login']);
        return false;
    }
 
}
