import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:any[];

  config:any = {
    columns: [
      { 
        title: 'Nombre',
        field: 'name'
      },
      {
        title: 'Correo',
        field: 'email'
      }
    ]
  };

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getUsers().then(response => {
      this.users = response;
    });
  }

  handleUserSelected(data) {
    console.log('El padre recibio', data);
  }

}
