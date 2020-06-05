import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'readData';
  // userObj={
  //   first_name:'',
  //   last_name:''
  // };
  
  userList = [];
 
  constructor(private carService: UserService,  private route: Router){ }

  ngOnInit(): void {
      this.carService.getUserList().subscribe(
          res => {
              if (res.body.totalCount > 0) {
                  this.userList = res.body.data;
              } else {              }             
              console.log(this.userList);
          }
      )
  }
}