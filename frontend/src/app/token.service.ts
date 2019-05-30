import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { TokenData } from './token-data';
import { UserData } from './user-data';

@Injectable()
export class TokenService {

  constructor(private _http: HttpClient) { }

  getToken(userData: UserData) {
    const getTokenUrl = 'http://localhost:8080/oauth/token';
    const getTokenParameters: HttpParams = new HttpParams()
    .append('grant_type', 'password')
    .append('username', userData.username)
    .append('password', userData.password);
    const getTokenHeaders: HttpHeaders = new HttpHeaders()
    .append('Authorization', 'Basic ' + btoa('client:secret'));

    return this._http.post<TokenData>(getTokenUrl, {
        withCredentials: true
      }, {
        headers: getTokenHeaders, 
        params: getTokenParameters
      }
    )
  }
}
