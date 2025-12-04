import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, RouterOutlet],
})
export class AppComponent implements OnInit {
  isLandingPage = false;

  private authService = inject(AuthService);
  private router = inject(Router);

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLandingPage = event.urlAfterRedirects.startsWith('/landingpage');
      }
    });
  }

  ngOnInit() {
    this.authService.autoLogin();
  }
}
