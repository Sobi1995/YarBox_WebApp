import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-address',
  templateUrl: './favorite-address.component.html',
  styleUrls: ['./favorite-address.component.css']
})
export class FavoriteAddressComponent implements OnInit {
  FavoriteAddress:any;
  FavoriteAddressDistnation:any;
  constructor() { }

  ngOnInit() {
    this.FavoriteAddress=JSON.parse(localStorage.getItem("Favoriteaddress"));
    this.FavoriteAddressDistnation = JSON.parse(localStorage.getItem("Favoriteaddressdestination"));
    
  }
deleteAddress(val:any){
    
  const index: number = this.FavoriteAddress.indexOf(val);
  if (index !== -1) {
      this.FavoriteAddress.splice(index, 1);
  }   
  localStorage.removeItem("Favoriteaddress");
localStorage.setItem("Favoriteaddress",JSON.stringify(this.FavoriteAddress));
}

deleteAddressDistnation(val:any){
  debugger
  const index: number = this.FavoriteAddressDistnation.indexOf(val);
  if (index !== -1) {
      this.FavoriteAddressDistnation.splice(index, 1);
  }   
  localStorage.removeItem("Favoriteaddressdestination");
localStorage.setItem("Favoriteaddressdestination",JSON.stringify(this.FavoriteAddressDistnation));
}
 
}