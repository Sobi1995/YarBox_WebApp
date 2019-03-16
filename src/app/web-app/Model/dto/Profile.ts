export class Profile{
    credit: number;
    email:string;
    firstName: string;
    lastName: string;
    phoneNumber:string;
    photoUrl: string;
    point: number;
    reagentCode: string;
    score: number;
    constructor(
        credit: number,
        email:string,
        firstName: string,
        lastName: string,
        phoneNumber:string,
        photoUrl: string,
        point: number,
        reagentCode: string,
        score: number){
            this.credit=credit;
            this.email=email;
            this.firstName=firstName;
            this.lastName=lastName;
            this.phoneNumber=phoneNumber;
            this.photoUrl=photoUrl;
            this.point=point;
            this.reagentCode=reagentCode;
            this.score=score;

    }
}