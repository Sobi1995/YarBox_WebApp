import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
 
 

import { WebAppModule } from './web-app/web-app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 

@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    WebAppModule,
    AuthenticationModule,
    BrowserAnimationsModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
