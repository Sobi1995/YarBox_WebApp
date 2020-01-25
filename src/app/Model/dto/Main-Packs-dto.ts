export class MainPacks{
    receiveType?: string;
    vehicleId?: number;
    isPacking?: boolean;
    isInsurance?: boolean;
    insurancePrice?: number;
 
    content?: string;
    PostPackWeight:number;
    count:number;
    constructor(  receiveType?: string,
        vehicleId?: number,
        isPacking?: boolean,
        isInsurance?: boolean,
        insurancePrice?: number,
        count? :number,       
        content?: string,  PostPackWeight?:number){
this.vehicleId=vehicleId;
this.isPacking=isPacking;
this.isInsurance=isInsurance;
this.insurancePrice=insurancePrice;
 this.count=count;
this.content=content;
this.PostPackWeight=PostPackWeight;



    }
}