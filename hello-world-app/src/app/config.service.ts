import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class ConfigService {

//   constructor(private http: HttpClient) { }
// }

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { }

  url = 'https://reqres.in/api/';
  
  getListUsers() {
    return this
            .http
            .get(`${this.url}/users?page=2`);
  }

  getSingleUser() {
    return this
            .http
            .get(`${this.url}/users/2`);
  }
}