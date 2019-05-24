import { Component } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _http: HttpClient){}

  getToken() {
    this._http.post(
      "http://localhost:8080/oauth/token?grant_type=password&username=rampage&password=pass", 
      {headers: new HttpHeaders(
        {'Authorization':'Basic ' + btoa('client:secret')})
      }).subscribe(res => console.log(res));
  }
}
