import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /* האם הבנאדם מזוהה*/
  isAuthenticated: boolean = false;
  constructor(private _router: Router) {
    
   }
  private readonly email_key = 'EMAIL';
  ngOnInit(): void {
  }
  onLogin(value: any): void {
    console.log('form values', value);
    if (value.email === "abc@gmail.com" && value.password === "a12345") {
      this.isAuthenticated = true;
      localStorage.setItem(this.email_key, value.email);
      this._router.navigate(['dashboard']);
    }
    /* לשמור את העובדה שהבנאדם נכנס
    להעביר את המשתמש למסך הראשון שמותר לו  */
    else {
      this.isAuthenticated = false;
    }
  }
}
