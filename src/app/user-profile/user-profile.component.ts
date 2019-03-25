import { Component, OnInit } from '@angular/core';
import { User } from './user';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User={
    name :"John",
    firstName : "Doe",
    age : 26,
    quote : '',
    photo :'https://via.placeholder.com/350x150',
  }
  
  constructor() { }

  ngOnInit() {
  }
  show:boolean=false;

  afficherAge(){
    this.show = !this.show;
  }

}
