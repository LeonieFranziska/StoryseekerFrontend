import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {UserJwt, UserLogin, UserRegister} from "./user-interface";

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  private dbUrl: string = '/api/v1/users';
  private logInUrl: string = '/login';
  private logOutUrl: string = '/logout';

  constructor(private http: HttpClient,) { }
  registerNewUser(user: UserRegister){
    const headers = { 'content-type': 'application/json'};
    return this.http.post<any>(this.dbUrl, user, {headers})
    // hab den Type aus UserRegister zur any geaendert. In Backend aus UUID zur Object.
  }

  userLogIn(user : UserLogin){
    const headers = { 'content-type': 'application/json'};
    //console.log(user, 'login data von frontend')
    const params = new HttpParams().append("username", user.username ).append("password", user.password)
    return this.http.post<UserJwt>(this.logInUrl, user, {headers,params})
  }

  userLogOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }
}
