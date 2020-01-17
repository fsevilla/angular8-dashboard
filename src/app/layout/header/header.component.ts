import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn:boolean;

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

}
