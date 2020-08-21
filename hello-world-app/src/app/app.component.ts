import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { ApicallService } from './apicall.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'

})


export class AppComponent {
  
  user : User[];
  userSingle : User;
  userCreated: any = {
      "name": "morpheus",
      "job": "leader"
  };

  constructor(public http: HttpClient, private apiService: ApicallService){}

  ngOnInit(){
    this.getUserList();
    this.getUserSingle();
    this.createUser();
  }

  getUserList() {
    this.apiService
    .getUsers()
    .subscribe((data:any) => {
      console.log(data);
      this.user = data.data;
    });
  }

  getUserSingle() {
    this.apiService
    .getUser()
    .subscribe((data:any) => {
      console.log(data);
      this.userSingle = data.data;
    });
  }

  createUser(){
    this.apiService
    .createUser(this.userCreated)
    .subscribe((res)=>{
      console.log(res);
      this.userCreated = res;
    });
  }

}