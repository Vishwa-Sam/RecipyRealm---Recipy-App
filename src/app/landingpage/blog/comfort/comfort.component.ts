import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { InViewDirective } from '../../in-view.directive';
import { contentFadeInOut, imageAnimation } from '../../landingpage.animations';

@Component({
  selector: 'app-comfort',
  standalone: true,
  imports: [InViewDirective],
  animations: [contentFadeInOut, imageAnimation],
  templateUrl: './comfort.component.html',
  styleUrl: './comfort.component.css',
})
export class ComfortComponent {
  imgState: string[] = [];

  private router = inject(Router);

  toBlogPage() {
    this.router.navigate(['/blog']);
  }
}
