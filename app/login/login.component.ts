import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/model/User';
import { UserService } from '../services/UserSerivce/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User=new User();
  loginOutputMessage="";

  constructor(private userService:UserService,private router:Router) {
  }

  login(){
    if(this.userService.validateUser(this.user)){
      this.router.navigate(["booking"]);
      this.loginOutputMessage="Successfully logged in !!";
    }
    else{
    this.loginOutputMessage="Wrong credentials";
    }
  }

  ngOnInit() {
  }


}
