import { Routes } from '@angular/router';

import { authGuard } from './auth/auth.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/landingpage',
    pathMatch: 'full',
  },
  {
    path: 'landingpage',
    loadComponent: () =>
      import('./landingpage/landingpage.component').then(
        (m) => m.LandingpageComponent
      ),
  },
  {
    path: 'about-us',
    loadComponent: () =>
      import('./landingpage/about-us/about-us.component').then(
        (m) => m.AboutUsComponent
      ),
  },
  {
    path: 'community',
    loadComponent: () =>
      import('./landingpage/community/community.component').then(
        (m) => m.CommunityComponent
      ),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./landingpage/blog/blog.routes').then((m) => m.blogRoutes),
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./auth/auth.component').then((m) => m.AuthComponent),
  },
  {
    path: 'shopping-list',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./shopping-list/shopping-list.component').then(
        (m) => m.ShoppingListComponent
      ),
  },
  {
    path: 'recipes',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./recipes/recipes.routes').then((m) => m.recipeRoutes),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];
