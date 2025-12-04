import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { InViewDirective } from '../../in-view.directive';
import {
  cardAnimation,
  contentFadeInOut,
  imageAnimation,
} from '../../landingpage.animations';

@Component({
  selector: 'app-lemon-cookies',
  standalone: true,
  imports: [InViewDirective],
  animations: [contentFadeInOut, imageAnimation, cardAnimation],
  templateUrl: './lemon-cookies.component.html',
  styleUrls: ['./lemon-cookies.component.css'],
})
export class LemonCookiesComponent {
  imgState: string[] = [];
  cardState: string[] = [];

  private router = inject(Router);

  toBlogPage() {
    this.router.navigate(['/blog']);
  }
}
