import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { InViewDirective } from '../../in-view.directive';
import { contentFadeInOut, imageAnimation } from '../../landingpage.animations';

@Component({
  selector: 'app-snacks',
  standalone: true,
  imports: [InViewDirective],
  animations: [contentFadeInOut, imageAnimation],
  templateUrl: './snacks.component.html',
  styleUrl: './snacks.component.css',
})
export class SnacksComponent {
  imgState: string[] = [];
  private router = inject(Router);

  toBlogPage() {
    this.router.navigate(['/blog']);
  }
}
