import { Component, OnInit } from '@angular/core';
import { TokenService } from '../token.service';
import { Router } from '@angular/router';
import { UserData } from '../user-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error = false;
  userData: UserData = new UserData();

  constructor(private tokenService: TokenService, private router: Router) { }

  login() {
    this.router.navigateByUrl('/home');
    if(this.userData.username.length > 0 && this.userData.password.length > 0) {
      // this.tokenService.getToken(this.userData).subscribe(result => {
      //   result.expires_in = new Date().getTime() + result.expires_in * 1000;

      //   sessionStorage.setItem('jsessionid', JSON.stringify(result));

      //   this.router.navigateByUrl('/home');
      //   this.error = false;
      // }, 
      // error => this.error = true);
    }
  }

}
