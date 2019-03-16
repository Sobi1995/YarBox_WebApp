import { Component, OnInit } from '@angular/core';
import { WebAppService } from '../Services/webapp-service';
import { StepPackEnum } from '../Model/Step-Pack-Enum';
import { DestinationDto } from '../Model/dto/destination-dto';
import { originDto } from '../Model/dto/origin-dto';
import { authenticationService } from 'src/app/authentication/authentication-Service';
import { PackService } from '../Services/Pack-Service';

@Component({
  selector: 'app-origin',
  templateUrl: './origin.component.html',
  styleUrls: ['./origin.component.css']
})
export class OriginComponent implements OnInit {
  originModel :originDto;
  constructor(
    private _webappService:WebAppService,
    public auth:authenticationService,
    private _packService:PackService
    ) {
    

   
 
 

   }

  ngOnInit() {
  }
  AcceptOrigin(){
 
  }
}
