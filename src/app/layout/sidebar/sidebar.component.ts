import { Component, OnInit } from '@angular/core';

import { MenuItem } from './menu-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuOptions:Array<MenuItem> = [
    { 
      icon: 'home',
      label: 'Home',
      path: '/'
    },
    {
      icon: 'folder',
      label: 'Carpetas',
      path: 'folders'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
