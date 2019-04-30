import { Component, OnInit } from '@angular/core';
import { PackService } from '../Services/Pack-Service';

@Component({
  selector: 'app-pack-daltile',
  templateUrl: './pack-daltile.component.html',
  styleUrls: ['./pack-daltile.component.css']
})
export class PackDaltileComponent implements OnInit {
    PackDitile:any;
  constructor(private PackService:PackService) { }

  ngOnInit() {
    this.PackDitile=this.PackService.getPackStatus;
      
  }

}
