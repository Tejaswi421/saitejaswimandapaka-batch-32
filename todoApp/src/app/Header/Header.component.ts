import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  loginText:string='Login';
  toggleLogin(){
     if(this.loginText==='Login'){
      this.loginText='Logout';
     }else{
      this.loginText='Login';
     }
  }


}
