import { Component, OnInit } from '@angular/core';
import { TargetLocator } from 'selenium-webdriver';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // constructor(private Auth: AuthService){ }

  ngOnInit() {
  }

  loginUser(event){
    
    event.preventDefault();
    
    const target = event.target
    const userName = target.querySelector('#userName').value
    const password = target.querySelector('#password').value

    // this.Auth.getUserDetails(userName,password)

    

    console.log(userName,password);
  }

}
