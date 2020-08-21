import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import * as Rx from "rxjs/Rx";
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get(`https://reqres.in/api/users?page2`).
        pipe(
           map((data: User[]) => {
             return data;
           }), catchError( error => {
             return throwError( 'Something went wrong!' );
           })
        )
    }

    getUser() {
      return this.httpClient.get(`https://reqres.in/api/users/2`).
          pipe(
             map((data: User) => {
               return data;
             }), catchError( error => {
               return throwError( 'Something went wrong!' );
             })
          )
      }

      createUsers(user: User[]) {
        return this.httpClient.post(`https://reqres.in/api/users`,user).
            pipe(
               map((data: any) => {
                 return data;
               }), catchError( error => {
                 return throwError( 'Something went wrong!' );
               })
            )
        }
}
