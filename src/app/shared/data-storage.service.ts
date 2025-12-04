import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  private http = inject(HttpClient);
  private recipeService = inject(RecipeService);

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://recipe-book-app-215fa-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json',
        recipes
      )
      .subscribe((response) => console.log(response));
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://recipe-book-app-215fa-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json'
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => this.recipeService.setRecipes(recipes))
      );
  }

  // fetchRecipes() {
  //   return this.http.get<Recipe[]>('https://.../recipes.json')
  //     .pipe(
  //       map(remote => (remote || []).map(r => ({
  //         ...r,
  //         ingredients: r.ingredients ? r.ingredients : [],
  //         id: Number(r.id) // keep numeric if present; NaN will be handled in setRecipes
  //       }))),
  //       tap(recipes => this.recipeService.setRecipes(recipes))
  //     );
  // }
}
