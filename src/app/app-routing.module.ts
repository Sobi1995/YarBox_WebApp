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
import { MyMessagesComponent } from './my-messages/my-messages.component';
import { WalletChargingComponent } from './wallet-charging/wallet-charging.component';

 
const routes: Routes = [
  {path:'base',component:HomeComponent},
  {path:'choose-vehicle',component:ChooseVehicleComponent}, 
  {path:'postPack-deities',component:PostPackDeitiesComponent},
  {path:'map',component:MapComponent},
  {path:'orgin',component:OriginComponent}, 
  {path:'accept-driver/:mobile',component:AcceptDriverComponent},
  {path:'destination',component:DestinationComponent},
  {path:'factor/:key',component:FactorComponent},
  {path:'search-driver/:postpackid',component:SearchDriverComponent}, 
  {path:'Support',component:SupportComponent},
  {path:'about-yarbox',component:AboutYarboxComponent},
  {path:'messages',component:MessagesComponent},
  {path:'my-messages',component:MyMessagesComponent},  
  {path:'wallet-charging',component:WalletChargingComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 

export class AppRoutingModule { }
