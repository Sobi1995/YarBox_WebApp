import { Component, OnInit } from '@angular/core';
import { WebAppService } from '../Services/webapp-service';
 
import { authenticationService } from 'src/app/authentication/authentication-Service';
import { PackService } from '../Services/Pack-Service';
import { originDto } from '../Model/dto/origin-dto';

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
