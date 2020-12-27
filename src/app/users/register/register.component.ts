import { UserService } from './../../user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'UI-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup
  user: any;
  zipCodePattern : string = "^[1-9][0-9]{5}$";


  constructor(private router:Router, private fb:FormBuilder,private userService:UserService) {
      this.registerForm = this.fb.group({
        userName: ['',Validators.required],
        email:(''),
        phoneNumber:('6362724268'),
        billingAdress: this.fb.group({
          doorNumber: (''),
          city:(''),
          zip:['',[Validators.required,Validators.pattern(this.zipCodePattern)]]
        })


    })

  }
  register(){
    console.log(this.registerForm.value);
let user = this.registerForm.value;
this.userService.createUser(user).subscribe((data)=>{
  console.log(data["msg"]);
});



  }
  ngOnInit(): void {
  }

  navigateBack(){
    this.router.navigate(['/login'])
  }

}
