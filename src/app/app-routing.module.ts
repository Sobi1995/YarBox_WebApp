import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChooseVehicleComponent } from './choose-vehicle/choose-vehicle.component';
import { PostPackDeitiesComponent } from './post-pack-deities/post-pack-deities.component';
import { MapComponent } from './map/map.component';
import { OriginComponent } from './origin/origin.component';
import { AcceptDriverComponent } from './accept-driver/accept-driver.component';
import { DestinationComponent } from './destination/destination.component';
import { FactorComponent } from './factor/factor.component';
import { SearchDriverComponent } from './search-driver/search-driver.component';
import { NgModule } from '@angular/core';
import { SupportComponent } from './support/support.component';
import { AboutYarboxComponent } from './about-yarbox/about-yarbox.component';
import { MessagesComponent } from './messages/messages.component';

import { WalletChargingComponent } from './wallet-charging/wallet-charging.component';
import { ReportsComponent } from './reports/reports.component';
import { FavoriteAddressComponent } from './favorite-address/favorite-address.component';
import { LoginGuardService } from './Services/login-guard.service';
import { AddFavoriteAddressComponent } from './add-favorite-address/add-favorite-address.component';
import { AddFavoriteAddressDestinationComponent } from './add-favorite-address-destination/add-favorite-address-destination.component';
import { WebPlatformComponent } from './web-platform/web-platform.component';
import { IosHomeScreenComponent } from './ios-home-screen/ios-home-screen.component';
import { AndroidHomeScreenComponent } from './android-home-screen/android-home-screen.component';
import { PackDaltileComponent } from './pack-daltile/pack-daltile.component';
import { FinalFactorComponent } from './final-factor/final-factor.component';
import { PackHistoryComponent } from './pack-history/pack-history.component';
import { Page404Component } from './page404/page404.component';
import { InvitedFirendComponent } from './invited-firend/invited-firend.component';

 
const routes: Routes = [
  {path:'base',component:HomeComponent, canActivate: [LoginGuardService]},
  {path:'choose-vehicle',component:ChooseVehicleComponent, canActivate: [LoginGuardService]}, 
  {path:'postPack-deities',component:PostPackDeitiesComponent, canActivate: [LoginGuardService]},
  {path:'',component:MapComponent, canActivate: [LoginGuardService]},
  {path:'orgin',component:OriginComponent, canActivate: [LoginGuardService]}, 
  {path:'accept-driver/:mobile',component:AcceptDriverComponent, canActivate: [LoginGuardService]},
  {path:'destination',component:DestinationComponent, canActivate: [LoginGuardService]},
  {path:'factor/:key',component:FactorComponent, canActivate: [LoginGuardService]},
  {path:'search-driver/:postpackid',component:SearchDriverComponent, canActivate: [LoginGuardService]}, 
  {path:'Support',component:SupportComponent, canActivate: [LoginGuardService]},
  {path:'about-yarbox',component:AboutYarboxComponent, canActivate: [LoginGuardService]},
  {path:'messages',component:MessagesComponent, canActivate: [LoginGuardService]},
  {path:'reports',component:ReportsComponent, canActivate: [LoginGuardService]},
  {path:'wallet-charging',component:WalletChargingComponent, canActivate: [LoginGuardService]},
  {path:'favorite-address',component:FavoriteAddressComponent, canActivate: [LoginGuardService]},
  {path:'add-favorite-address',component:AddFavoriteAddressComponent, canActivate: [LoginGuardService]}, 
  {path:'add-favorite-address-destination',component:AddFavoriteAddressDestinationComponent, canActivate: [LoginGuardService]},  
  {path:'pack-daltile',component:PackDaltileComponent, canActivate: [LoginGuardService]}, 
  {path:'final-factor',component:FinalFactorComponent, canActivate: [LoginGuardService]},
  {path:'pack-history',component:PackHistoryComponent, canActivate: [LoginGuardService]},
  {path:'invited-firend',component:InvitedFirendComponent, canActivate: [LoginGuardService]},
  {path:'WebPlatform',component:WebPlatformComponent},
  {path:'ios-home-screen',component:IosHomeScreenComponent},
  {path:'android-home-screen',component:AndroidHomeScreenComponent},
  {path: '404', component: Page404Component},
 {path: '**', redirectTo: '/404'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],//, { useHash: true }
  exports: [RouterModule]
})
 

export class AppRoutingModule { }
