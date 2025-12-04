import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { InViewDirective } from '../in-view.directive';
import { contentFadeInOut, imageAnimation } from '../landingpage.animations';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [InViewDirective],
  animations: [contentFadeInOut, imageAnimation],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css',
})
export class CommunityComponent {
  imgState: string[] = [];

  private router = inject(Router);

  onNavigate() {
    this.router.navigate(['/auth']);
  }

  onStartApp() {
    this.router.navigate(['/landingpage']);
  }
}
