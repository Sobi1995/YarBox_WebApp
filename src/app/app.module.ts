import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
 
 

 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { DestinationComponent } from './destination/destination.component';
import { OriginComponent } from './origin/origin.component';
import { TomanPipe } from './Shared/toman.pipe';
import { ChooseVehicleComponent } from './choose-vehicle/choose-vehicle.component';
import { PostPackDeitiesComponent } from './post-pack-deities/post-pack-deities.component';
import { FactorComponent } from './factor/factor.component';
import { SliderComponent } from './slider/slider.component';
import { AcceptDriverComponent } from './accept-driver/accept-driver.component';
import { SearchDriverComponent } from './search-driver/search-driver.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
 
import { AgmCoreModule } from '@agm/core';
import { WebAppService } from './Services/webapp-service';
import { PackService } from './Services/Pack-Service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './Shared/AuthInterceptor ';
import { ErrorComponent } from './Shared/error/error.component';
import { SupportComponent } from './support/support.component';
import { AboutYarboxComponent } from './about-yarbox/about-yarbox.component';
import { MessagesComponent } from './messages/messages.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { WalletChargingComponent } from './wallet-charging/wallet-charging.component';
import { ReportsComponent } from './reports/reports.component';
import { FavoriteAddressComponent } from './favorite-address/favorite-address.component';
import { CoreModule } from './Core/core.module';
 
 
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    DestinationComponent,
    OriginComponent,
    TomanPipe,
    ChooseVehicleComponent,
    PostPackDeitiesComponent,
    FactorComponent,
    SliderComponent,
    AcceptDriverComponent,
    SearchDriverComponent,
    ErrorComponent,
    SupportComponent,
    AboutYarboxComponent,
    MessagesComponent,
    WalletChargingComponent,
    ReportsComponent,
    FavoriteAddressComponent
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyBk6zk8Beu9-gi2EZZZCPxFmlT7hTxDDQ0'
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
   
  ],
  providers: [
    WebAppService,PackService,  
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
