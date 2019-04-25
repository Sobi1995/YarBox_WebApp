import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authenticationService } from '../authentication/authentication-Service';

@Component({
  selector: 'app-ios-home-screen',
  templateUrl: './ios-home-screen.component.html',
  styleUrls: ['./ios-home-screen.component.css']
})
export class IosHomeScreenComponent implements OnInit {

  constructor(private router:Router,
    private _auth :authenticationService,) { }

  ngOnInit() {
  }
  Ok(){
     
   localStorage.setItem("add-homescreen","true") 
   this.router.navigate(["/login"])
   this._auth.setIsLogin(false);
  }
}
