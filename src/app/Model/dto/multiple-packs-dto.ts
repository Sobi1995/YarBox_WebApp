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
}