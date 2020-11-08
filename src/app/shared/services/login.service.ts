import { Injectable } from '@angular/core';
import {LogIn} from '../models/logIn';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthenticationService } from './authentication.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'  //     'Authorization': 'my-auth-token'
  })
};

@Injectable(
{
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }


  getLogin(): Observable<LogIn[]> {
    // add authorization header with jwt token
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    // get users from api
    return this.http.get<LogIn[]>(environment.apiUrl + '/logIn/', httpOptions);  // todo is a problem
  }

}

