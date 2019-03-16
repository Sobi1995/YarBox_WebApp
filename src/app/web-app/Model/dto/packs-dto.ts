export class packsDto{
     typeId : number ;
     weightId : number ;
     count : number;    
     constructor(typeId? : number,
          weightId? : number ,
          count? : number,){
this.typeId=typeId;
this.weightId=weightId;
this.count=count;
     }
}