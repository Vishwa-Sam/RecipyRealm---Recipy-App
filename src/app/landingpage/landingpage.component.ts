import { Component, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { InViewDirective } from './in-view.directive';
import {
  cardAnimation,
  contentFadeInOut,
  imageAnimation,
} from './landingpage.animations';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [RouterLink, InViewDirective],
  animations: [contentFadeInOut, imageAnimation, cardAnimation],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css',
})
export class LandingpageComponent {
  imgState: string[] = [];
  cardState: string[] = [];

  private router = inject(Router);
  private authService = inject(AuthService);

  isAuthenticated = computed(() => this.authService.user() !== null);

  onNavigate() {
    if (this.isAuthenticated()) {
      this.router.navigate(['recipes']);
    } else {
      this.router.navigate(['auth']);
    }
  }

  onNavTo() {
    if (this.isAuthenticated()) {
      this.router.navigate(['shopping-list']);
    } else {
      this.router.navigate(['auth']);
    }
  }
}
