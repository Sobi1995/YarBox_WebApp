import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invited-firend',
  templateUrl: './invited-firend.component.html',
  styleUrls: ['./invited-firend.component.css']
})
export class InvitedFirendComponent implements OnInit {
  txt:string;
  regcode:string;
  constructor() { }

  ngOnInit() {
    this.regcode= JSON.parse(localStorage.getItem("Profile")).reagentCode;
    this.txt=" سلام یارباکس اپلیکیشن سریع، ساده و کم هزینه ایست که"+ '\n\n'+
   "من برای ارسال خرده بار هام به شهرهای مختلف ازش استفاده "+ '\n\n'+
   "می کنم. به شما هم پیشنهاد می کنم از طریق کافه بازار  یارباکس رو دانلود کنی "+ '\n\n'+
   "کد معرف :   "+ this.regcode + 
   "https://yarbox.co/account/sign-up?ReagentCode="+this.regcode
   
  }

}
