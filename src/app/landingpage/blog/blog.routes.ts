import { Routes } from '@angular/router';

import { BlogComponent } from './blog.component';

export const blogRoutes: Routes = [
  {
    path: '',
    component: BlogComponent,
  },
  {
    path: 'lemon-cookies',
    loadComponent: () =>
      import('./lemon-cookies/lemon-cookies.component').then(
        (m) => m.LemonCookiesComponent
      ),
  },
  {
    path: 'world-snacks',
    loadComponent: () =>
      import('./snacks/snacks.component').then((m) => m.SnacksComponent),
  },
  {
    path: 'comfort-foods',
    loadComponent: () =>
      import('./comfort/comfort.component').then((m) => m.ComfortComponent),
  },
];
