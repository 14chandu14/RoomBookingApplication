import { Injectable } from '@angular/core';
import { User } from 'src/model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:User;
  userList:User[]=[];

  constructor() { 
    this.user=new User(101,"virat@gmail.com","abcd");
    this.userList.push(this.user);
    this.user=new User(102,"dhoni@gmail.com","abcd");
    this.userList.push(this.user);
  }

  validateUser(userParam:User):boolean{
    this.userList.forEach(u=>{
      if(u.emailid===userParam.emailid && u.password===userParam.password)
        return true;
    })
    return false;
  }
}
