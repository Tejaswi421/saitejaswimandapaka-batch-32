import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public email=""
  public password=""
  onClick()
  {
   console.log(this.email)
   console.log(this.password)

  }
  constructor() { }

  ngOnInit() {
    
  }

}
