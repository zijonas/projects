import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { UserData } from './user-data';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  providers: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _http: HttpClient, private tokenService: TokenService){}

  userData: UserData = new UserData();
  username = '';
  password = '';
  token = '';
  error = '';

  getToken() {
    this.tokenService.getToken(this.userData).subscribe(res => {
      this.token = res.access_token;
      this.error = '';
    }, err => {
      this.error = 'ERROR';
      this.token = '';
    });
  }

  printEvent(event: NgModel) {
    console.log(this.userData.username + ' : ' + this.userData.password);
  }
}
