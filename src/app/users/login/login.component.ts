import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userName: string = '';
  password: string;
  constructor(private router: Router) {}

  validateLogin() {
    if (this.userName == null || this.userName == '') {
      alert('username is required');
    } else {
      alert('XXX');
      localStorage.setItem("user",this.userName);
    this.router.navigate(['/tiles']);
    }
  }
  ngOnInit(): void {}
}
  