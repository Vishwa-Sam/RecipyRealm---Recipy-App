import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';

import { Recipe } from './recipe.model';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from './recipe.service';

export const recipeResolver: ResolveFn<Recipe[]> = () => {
  const dataStorageService = inject(DataStorageService);
  const recipeService = inject(RecipeService);

  const recipes = recipeService.getRecipes();

  if (recipes.length === 0) {
    return dataStorageService.fetchRecipes();
  } else {
    return recipes;
  }
};
  