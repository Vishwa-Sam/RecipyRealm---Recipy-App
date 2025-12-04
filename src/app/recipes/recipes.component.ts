import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeService } from './recipe.service';
import { DropdownDirective } from '../shared/dropdown.directive';
import { SearchService } from '../shared/search.service';
import { AuthSpinnerComponent } from '../shared/auth-spinner/auth-spinner.component';
import {
  fadeUpAnimation,
  fallBackImageAnimation,
  imageRightAnimation,
  textAnimation,
} from './recipe.animation';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [
    RecipeListComponent,
    RouterOutlet,
    DropdownDirective,
    CommonModule,
    AuthSpinnerComponent,
  ],
  animations: [
    textAnimation,
    imageRightAnimation,
    fadeUpAnimation,
    fallBackImageAnimation,
  ],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent {
  private recipeService = inject(RecipeService);
  private searchService = inject(SearchService);

  private allRecipes = this.recipeService.getRecipesSignal();

  activeFilter: string = '';
  activeCategory = signal<string>('');
  activeCuisine = signal<string>('');
  isLoading = this.searchService.isLoading;

  filteredRecipes = computed(() => {
    const recipes = this.allRecipes();
    const category = this.activeCategory();
    const cuisine = this.activeCuisine();
    const search = this.searchService.searchQuery().toLowerCase();

    let result = recipes;

    if (category) {
      result = result.filter((r) => r.category === category);
    }

    if (cuisine) {
      result = result.filter((r) => r.cuisine === cuisine);
    }

    if (search.trim()) {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(search)
      );
      //recipes list is the receiver — it reacts automatically whenever the signal changes.
    }

    return result;
  });

  onCategoryFilter(category: string) {
    this.triggerLoader();
    this.activeCategory.set(category);
    this.activeCuisine.set('');
  }

  onCuisineFilter(cuisine: string) {
    this.triggerLoader();
    this.activeCuisine.set(cuisine);
    this.activeCategory.set('');
  }

  onShowAllRecipes() {
    this.triggerLoader();
    this.activeCategory.set('');
    this.activeCuisine.set('');
    this.searchService.setQuery('');
  }

  setActiveFilter(filter: string) {
    this.activeFilter = filter;
  }

  private triggerLoader() {
    this.searchService.isLoading.set(true);
    setTimeout(() => this.searchService.isLoading.set(false), 1000);
  }
}
