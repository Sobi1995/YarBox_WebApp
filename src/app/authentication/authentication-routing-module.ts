import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VerifyCodeComponent } from './verify-code/verify-code.component';
 
const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'verify-vode/:phonenumber',component:VerifyCodeComponent}
    ];
 

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
