import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.css']
})
export class ProfileComponent implements OnInit {
  fname= "Tejaswi"
  lname= "Mandapaka"
  dob="07-22-1999"
  pno=4698668100
  email_id="saitejaswi412@gmail.com"
  constructor() { }

  ngOnInit() {
  }

}
