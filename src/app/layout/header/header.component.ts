import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn:boolean;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
    this.authService.loginObservable.subscribe(data => {
      this.isLoggedIn = data;
    });
  }

  logout() {
    this.authService.clearToken();
    this.router.navigate(['/login']);
  }

}
