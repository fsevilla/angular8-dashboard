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
    title: 'Usuarios',
    columns: [
      { 
        title: 'Nombre',
        field: 'name',
        sortable: true
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

  handleOnClick(data) {
    console.log('El padre recibio', data);
  }

}
