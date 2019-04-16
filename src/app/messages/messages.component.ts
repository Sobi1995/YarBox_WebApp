import { Component, OnInit } from '@angular/core';
import { WebAppService } from '../Services/webapp-service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages:any;
  constructor(  private _webappservice:WebAppService) { }

  ngOnInit() {
    this._webappservice.getUserMessages().subscribe(res=>{
      this.messages=res;
        
    })
  }
}
