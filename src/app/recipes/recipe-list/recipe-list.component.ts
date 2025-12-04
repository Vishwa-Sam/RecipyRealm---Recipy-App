import { Component, inject, input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../recipe.model';
import { listAnimation } from '../recipe.animation';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent],
  animations: [listAnimation],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  recipes = input<Recipe[]>(); //for input binding to fetch the recipes from the service

  // private recipeService = inject(RecipeService);
  // recipes = computed<Recipe[]>(() => this.recipeService.getRecipes());
  // now recipes will be fetched in the recipe.ts by filteredrecipes where initailly it will hold all the reipes and upon signal change the recipes list change

  toNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}

// ngOnInit() {
//   let subscription = this.recipeService.recipeAdded.subscribe((recipe: Recipe[]) => {
//     this.recipes = recipe
//   })
//   this.destroyRef.onDestroy(() => subscription.unsubscribe());

//   this.recipes = this.recipeService.getRecipes();
// } before converting to signals used subhject and subscription to update the recipe list
