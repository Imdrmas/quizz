import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  adminUsername = '';
  userUsername = '';
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  adminLogin(adminUsername) {
    if(adminUsername==="admin") {
      window.location.replace("/questions");
    } else {
      alert('Please enter correct username')
    }
  }
  userLogin(userUsername) {
    console.log(userUsername.length)
    if(userUsername.length < 2) {
      alert('Please enter correct username')
    } else {
      this.userService.saveUsername(userUsername);
       window.location.replace(`/historique/${userUsername}`);
    }
  }
}
