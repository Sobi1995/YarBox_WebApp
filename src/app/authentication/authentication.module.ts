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

@NgModule({
  declarations: [LoginComponent, VerifyCodeComponent],
  imports: [
    CommonModule,
    HttpClientModule ,
    BrowserModule,
    FormsModule,
 
    AuthenticationRoutingModule
  ],
  providers:[authenticationService]
})
export class AuthenticationModule { }
