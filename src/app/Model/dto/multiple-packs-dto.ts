import { DestinationDto } from './destination-dto';
import { originDto } from './origin-dto';
import { MainPacks } from './Main-Packs-dto';
import { packsDto } from './packs-dto';

export class  MultiplePacksDto{
    destination :DestinationDto;
    origin:originDto;
    packs:packsDto[];
    receiveType: string;
    vehicleId: number;
    isPacking: boolean;
    isInsurance: boolean;
    insurancePrice: number;
    content?: string;
    postPacktype:number;
    PostPackWeight:number;
    count:number;
    constructor(){
        this.destination={} as  DestinationDto
        this.origin={} as originDto;
        this.packs=[]
        this.receiveType="DoorToDoor";
        this.vehicleId=0;
        this.isPacking=true;
        this.isInsurance=true;
        this.content="";
        this.postPacktype=0;
        this.PostPackWeight=null;
        this.count=1;
    }
}