import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VerifyCodeComponent } from './verify-code/verify-code.component';
import { LoginProfileGuardService } from './login-profile-guard.service';
import { RegisterComponent } from './register/register.component';
 
const routes: Routes = [
    {path:'login',component:LoginComponent, canActivate: [LoginProfileGuardService]},
    {path:'verify-vode/:phonenumber',component:VerifyCodeComponent, canActivate: [LoginProfileGuardService]},
    {path:'register/:mobile',component:RegisterComponent, canActivate: [LoginProfileGuardService]}
    ];
 

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
