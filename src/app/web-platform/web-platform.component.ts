import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-platform',
  templateUrl: './web-platform.component.html',
  styleUrls: ['./web-platform.component.css']
})
export class WebPlatformComponent implements OnInit {

  constructor() {
    history.pushState(null, null, null);
    window.onpopstate = function () {
        history.go(1);
    };
   }

  ngOnInit() {
  }

}
