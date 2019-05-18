import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { VerifyCodeComponent } from './verify-code/verify-code.component';
 
import { authenticationService } from './authentication-Service';
import { AuthenticationRoutingModule } from './authentication-routing-module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoginProfileGuardService } from './login-profile-guard.service';
import { RegisterComponent } from './register/register.component';
import { ToEnglishNumber } from '../Shared/ToEnglishNumber-Pipe';

@NgModule({
  declarations: [LoginComponent, VerifyCodeComponent, RegisterComponent,ToEnglishNumber],
  imports: [
    CommonModule,
    HttpClientModule ,
    BrowserModule,
    FormsModule,
 
    AuthenticationRoutingModule
  ],
  providers:[authenticationService,
    { provide: LoginProfileGuardService, useClass: LoginProfileGuardService }]
})
export class AuthenticationModule { }
