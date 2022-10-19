import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { Ruser } from '../ruser';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  ruser: Ruser= new Ruser();
  constructor(private registerService:RegisterService, private router:Router) { }

  ngOnInit(): void {
  }

  userRegister(){

    console.log(this.ruser);
    this.registerService.registerUser(this.ruser).subscribe(data=>{
      alert("Successfully user is register")  
      this.router.navigate([''])
    },error=>alert("sorry user not register"));
    
  }

}
