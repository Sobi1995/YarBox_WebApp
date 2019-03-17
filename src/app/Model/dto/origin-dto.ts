export class  originDto{
  
    province : string ;
    city  : string ;
    street  : string ;
    latitude  : string ;
    llongitude  : string
    senderPhoneNumber? : string 
    constructor(    
        senderPhoneNumber? : string ,
        province? : string ,
        city?  : string ,
        street?  : string ,
        latitude?  : string ,
        llongitude?  : string){
 
            
            this.province=province;
            this.city=city;
            this.street=street;
            this.latitude=latitude;
            this.llongitude=llongitude;
            this.senderPhoneNumber =senderPhoneNumber;
    }
}