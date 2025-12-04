import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import {
  cardAnimation,
  contentFadeInOut,
  imageAnimation,
} from '../landingpage.animations';
import { InViewDirective } from '../in-view.directive';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [InViewDirective],
  animations: [contentFadeInOut, imageAnimation, cardAnimation],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {
  imgState: string[] = [];
  cardState: string[] = [];

  private router = inject(Router);

  onSignup() {
    this.router.navigate(['/auth']);
  }
}
