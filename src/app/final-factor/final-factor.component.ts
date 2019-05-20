import { Component, OnInit } from '@angular/core';
import { PackService } from '../Services/Pack-Service';
import { WebAppService } from '../Services/webapp-service';

@Component({
  selector: 'app-final-factor',
  templateUrl: './final-factor.component.html',
  styleUrls: ['./final-factor.component.css']
})
export class FinalFactorComponent implements OnInit {
  Profile:any;
  PackDitile:any;
  constructor(private PackService:PackService,
              ) { 

                history.pushState(null, null, null);
                window.onpopstate = function () {
                    history.go(1);
                };
              }

  ngOnInit() {
    this.PackDitile=this.PackService.getPackStatus;
    console.log( this.PackDitile)
    this.Profile = JSON.parse(localStorage.getItem("Profile"));
     
  }

}
