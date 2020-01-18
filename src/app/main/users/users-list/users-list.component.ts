import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users:any[];

  config:any = {
    title: 'Usuarios',
    columns: [
      { 
        title: 'Nombre',
        field: 'name',
        sortable: true,
        clickeable: false
      },
      {
        title: 'Correo',
        field: 'email',
        clickeable: true
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
