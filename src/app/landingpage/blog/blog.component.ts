import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { InViewDirective } from '../in-view.directive';
import {
  cardAnimation,
  contentFadeInOut,
  imageAnimation,
} from '../landingpage.animations';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [InViewDirective],
  animations: [contentFadeInOut, imageAnimation, cardAnimation],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  imgState: string[] = [];
  cardState: string[] = [];

  showSection1 = false;
  showSection2 = false;

  private router = inject(Router);

  goToArticle(slug: string) {
    this.router.navigate(['/blog', slug]);
  }

  toLoadMore() {
    if (!this.showSection1) {
      this.showSection1 = true;
    } else if (!this.showSection2) {
      this.showSection2 = true;
    }
  }

  toLoadLessSection1() {
    this.showSection1 = false;
  }

  toLoadLessSection2() {
    this.showSection2 = false;
  }
}
