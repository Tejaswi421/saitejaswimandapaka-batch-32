import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Signup',
  templateUrl: './Signup.component.html',
  styleUrls: ['./Signup.component.css']
})
export class SignupComponent implements OnInit {
  
  fname=""
  lname=""
  email=""
  dob=""
  pno=""
  password=""
  cpassword=""
 onSignUp()
 {
  console.log(this.fname)
  console.log(this.lname)
  console.log(this.email)
  console.log(this.dob)
 }
  constructor() { }

  ngOnInit() {
  }

}
