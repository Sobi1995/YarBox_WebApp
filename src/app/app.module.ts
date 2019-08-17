import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
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
// import { CoreModule } from './Core/core.module';
import { LoginGuardService } from './Services/login-guard.service';
import { AddFavoriteAddressComponent } from './add-favorite-address/add-favorite-address.component';
import { AddFavoriteAddressDestinationComponent } from './add-favorite-address-destination/add-favorite-address-destination.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { WebPlatformComponent } from './web-platform/web-platform.component';
import { IosHomeScreenComponent } from './ios-home-screen/ios-home-screen.component';
import { AndroidHomeScreenComponent } from './android-home-screen/android-home-screen.component';
import { PackDaltileComponent } from './pack-daltile/pack-daltile.component';
import { FinalFactorComponent } from './final-factor/final-factor.component';
import { PackHistoryComponent } from './pack-history/pack-history.component';
import { ErrorsHandler } from './Services/errors-handler.service';
import { Page404Component } from './page404/page404.component';
import { InvitedFirendComponent } from './invited-firend/invited-firend.component';
import { HistoryComponent } from './history/history.component';
import { JalaliPipe } from './Services/Jalali-Pipe';
import { ToEnglishNumber } from './Shared/ToEnglishNumber-Pipe';
import { SharedModule } from './Shared/shared.module';
import { RulesiteComponent } from './rulesite/rulesite.component';
import { FactoronlineComponent } from './factoronline/factoronline.component';
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
    JalaliPipe,
    AcceptDriverComponent,
    SearchDriverComponent,
    ErrorComponent,
    SupportComponent,
    AboutYarboxComponent,
    MessagesComponent,
    WalletChargingComponent,
    ReportsComponent,
    FavoriteAddressComponent,
    AddFavoriteAddressComponent,
    AddFavoriteAddressDestinationComponent,
    WebPlatformComponent,
    IosHomeScreenComponent,
    AndroidHomeScreenComponent,
    PackDaltileComponent,
    FinalFactorComponent,
    PackHistoryComponent,
    Page404Component,
    InvitedFirendComponent,
    HistoryComponent,
    RulesiteComponent,
    FactoronlineComponent,
    // ToEnglishNumber
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AuthenticationModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  
    DeviceDetectorModule.forRoot(),
    FormsModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // CoreModule,
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
    { provide: LoginGuardService, useClass: LoginGuardService },
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler,
    }
  ],
  bootstrap: [AppComponent],
  // exports:[ToEnglishNumber]
 
})
export class AppModule { }
