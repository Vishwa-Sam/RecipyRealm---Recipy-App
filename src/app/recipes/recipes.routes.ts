import { Routes } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { recipeResolver } from './recipe-resolver.service';

export const recipeRoutes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./recipe-start/recipe-start.component').then(
            (m) => m.RecipeStartComponent
          ),
      },
      {
        path: 'new',
        loadComponent: () =>
          import('./recipe-edit/recipe-edit.component').then(
            (m) => m.RecipeEditComponent
          ),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./recipe-detail/recipe-detail.component').then(
            (m) => m.RecipeDetailComponent
          ),
        resolve: { recipes: recipeResolver },
        data: { animation: 'RecipeDetail' },
      },
      {
        path: ':id/edit',
        loadComponent: () =>
          import('./recipe-edit/recipe-edit.component').then(
            (m) => m.RecipeEditComponent
          ),
        resolve: { recipes: recipeResolver },
      },
    ],
  },
];
