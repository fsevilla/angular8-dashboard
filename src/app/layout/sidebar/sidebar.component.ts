import { Component, OnInit } from '@angular/core';

import { MenuItem } from './menu-item';
import { AuthService } from './../../shared/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isLoggedIn:boolean = false;

  menuOptions:Array<MenuItem> = [
    { 
      icon: 'home',
      label: 'Home',
      path: '/'
    },
    {
      icon: 'people_alt',
      label: 'Users',
      path: 'users',
      role: 'admin'
    },
    {
      icon: 'video_library',
      label: 'Movies',
      path: 'movies'
    }
  ]

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.authService.loginObservable.subscribe(data => {
      this.isLoggedIn = data;
    });
  }

}
