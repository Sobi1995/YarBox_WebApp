import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { FormsModule } from '@angular/forms';
import { WebappRoutingModule } from './webapp-routing.module';
import { DestinationComponent } from './destination/destination.component';
import { OriginComponent } from './origin/origin.component';
 
import { WebAppService } from './Services/webapp-service';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChooseVehicleComponent } from './choose-vehicle/choose-vehicle.component';
 
import { PostPackDeitiesComponent } from './post-pack-deities/post-pack-deities.component';
import { AgmCoreModule } from '@agm/core';
import { FactorComponent } from './factor/factor.component';
import { PackService } from './Services/Pack-Service';
import { BrowserModule } from '@angular/platform-browser';
import { SliderComponent } from './slider/slider.component';
import { AcceptDriverComponent } from './accept-driver/accept-driver.component';
import { SearchDriverComponent } from './search-driver/search-driver.component';

@NgModule({
  declarations: [
  HomeComponent,
  MapComponent,
  DestinationComponent,
  OriginComponent,
 
  ChooseVehicleComponent,
 
  PostPackDeitiesComponent,
 
 
  FactorComponent,
 
 
  SliderComponent,
 
 
  AcceptDriverComponent,
 
 
  SearchDriverComponent],

  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    WebappRoutingModule,
   
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyBk6zk8Beu9-gi2EZZZCPxFmlT7hTxDDQ0'
    })
  ],
  providers:[WebAppService,PackService]
})
export class WebAppModule { }
