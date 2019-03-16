import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChooseVehicleComponent } from './choose-vehicle/choose-vehicle.component';
import { PostPackDeitiesComponent } from './post-pack-deities/post-pack-deities.component';
import { MapComponent } from './map/map.component';
import { OriginComponent } from './origin/origin.component';
 
import { DestinationComponent } from './destination/destination.component';
import { FactorComponent } from './factor/factor.component';
import { AcceptDriverComponent } from './accept-driver/accept-driver.component';
import { SearchDriverComponent } from './search-driver/search-driver.component';
 
 
const routes: Routes = [
    {path:'Home',component:HomeComponent},
    {path:'choose-vehicle',component:ChooseVehicleComponent, pathMatch: 'full'}, 
    {path:'postPack-deities',component:PostPackDeitiesComponent, pathMatch: 'full'},
    {path:'map',component:MapComponent},
    {path:'orgin',component:OriginComponent}, 
    {path:'accept-driver/:mobile',component:AcceptDriverComponent},
    {path:'destination',component:DestinationComponent},
    {path:'factor/:key',component:FactorComponent},
    {path:'search-driver/:postpackid',component:SearchDriverComponent},
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class WebappRoutingModule { }
