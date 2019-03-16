import { Injectable } from '@angular/core';

Injectable()
export class LayoutService{
showlayout:boolean;
    constructor(){

    }

    setLayout(show:boolean){
     this.showlayout=show;
    }
    getLayout(){
        return this.showlayout;
    }
}