export class DestinationDto{
     receiverPhoneNumber :string;
     receiverName :string;
     portId :number;
     province :string;
     city :string;
     street :string;
     constructor(
           receiverPhoneNumber? :string,
          receiverName? :string,
          portId? :number,
          province? :string,
          city? :string,
          street? :string){
               this.receiverPhoneNumber=receiverPhoneNumber;
               this.receiverName=receiverName;
               this.portId=portId;
               this.province=province;
               this.city=city;
               this.street=street;

     }
}