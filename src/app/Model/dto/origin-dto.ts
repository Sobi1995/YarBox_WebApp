export class  originDto{
  
    province : string ;
    city  : string ;
    street  : string ;
    latitude  : string ;
    longitude  : string
    senderPhoneNumber? : string 
    constructor(    
        senderPhoneNumber? : string ,
        province? : string ,
        city?  : string ,
        street?  : string ,
        latitude?  : string ,
        longitude?  : string){
 
            
            this.province=province;
            this.city=city;
            this.street=street;
            this.latitude=latitude;
            this.longitude=longitude;
            this.senderPhoneNumber =senderPhoneNumber;
    }
}