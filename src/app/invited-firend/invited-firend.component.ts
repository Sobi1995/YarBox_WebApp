import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invited-firend',
  templateUrl: './invited-firend.component.html',
  styleUrls: ['./invited-firend.component.css']
})
export class InvitedFirendComponent implements OnInit {
  txt:string;
  constructor() { }

  ngOnInit() {
    let regcode= JSON.parse(localStorage.getItem("Profile")).reagentCode;
    this.txt="سلام یارباکس اپلیکیشن سریع، ساده و کم هزینه ایست که"+
   "من برای ارسال خرده بار هام به شهرهای مختلف ازش استفاده "+
   "می کنم. به شما هم پیشنهاد می کنم از طریق کا فه بازار  یارباکس رو دانلود کنی "+
   "کد معرف :   "+ regcode + 
   "https://yarbox.co/account/sign-up?ReagentCode="+regcode
   
  }

}
