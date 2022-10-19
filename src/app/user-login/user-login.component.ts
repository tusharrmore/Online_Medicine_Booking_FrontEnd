import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginuserService } from '../loginuser.service';
import { User } from '../user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user:User =new User();

  
  // constructor(private loginuserservice:LoginuserService) { }

  constructor(private loginuserservice:LoginuserService , private router : Router) { }

  ngOnInit(): void {
  }

   userLogin(){
    if(this.user.userId!=null){
     console.log(this.user)

     sessionStorage.setItem('name',this.user.userId)

    this.loginuserservice.loginUser(this.user).subscribe(data=>{
      alert("Login Successfully")
      this.router.navigate(['home']);

    },error=>alert("sorry please enter correct UserId and Password"));
  }
  else {
    this.router.navigate(['/'])
  }
    
  }

}


