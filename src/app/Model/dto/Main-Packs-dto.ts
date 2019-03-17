export class MainPacks{
    receiveType?: string;
    vehicleId?: number;
    isPacking?: boolean;
    isInsurance?: boolean;
    insurancePrice?: number;
 
    content?: string
    constructor(  receiveType?: string,
        vehicleId?: number,
        isPacking?: boolean,
        isInsurance?: boolean,
        insurancePrice?: number,
       
        content?: string){
this.vehicleId=vehicleId;
this.isPacking=isPacking;
this.isInsurance=isInsurance;
this.insurancePrice=insurancePrice;
 
this.content=content;



    }
}