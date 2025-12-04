import {
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

import { DropdownDirective } from '../../shared/dropdown.directive';
import { RecipeService } from '../recipe.service';
import { recipeDetailAnimation } from '../recipe.animation';
import { Recipe } from '../recipe.model';
import { AlertMessageComponent } from '../../shared/alert-message/alert-message.component';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [DropdownDirective, CommonModule, AlertMessageComponent],
  animations: [recipeDetailAnimation],
  host: { '[@recipeDetailAnimation]': '' },
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {
  private recipeService = inject(RecipeService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  alertMessage = signal('');
  alertType = signal('');
  showAlert = signal(false);
  error = signal<string | null>(null);

  id = toSignal(
    this.route.paramMap.pipe(map((params) => Number(params.get('id')))),
    { initialValue: -1 }
  );

  // safeUrl?: SafeResourceUrl; for iframe
  // private sanitizer = inject(DomSanitizer);
  // ngOnInit() {
  //   this.recipe = this.recipeService.getRecipeById(this.id());
  //   if (this.recipe.youtubeLink) {
  //     this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.recipe.youtubeLink);
  //   }
  // }

  recipe = computed<Recipe | undefined>(() => {
    const allRecipes = this.recipeService.getRecipesSignal()();
    const routeId = Number(this.id());

    if (!allRecipes?.length || routeId < 0 || isNaN(routeId)) return undefined;

    return allRecipes.find((r) => r.id === routeId);
  });

  onAddToShoppingList() {
    const recipe = this.recipe();
    if (!recipe || recipe.ingredients.length === 0) {
      this.error.set(
        'No ingredients available to add to the shopping list(Add ingredients in Edit Recipe mode and try again.).'
      );
      return;
    }
    this.recipeService.addIngredientsToShoppingList(recipe.ingredients);
    this.triggerAlert('add');
  }

  closeError() {
    this.error.set(null);
  }

  toEditRecipe() {
    this.triggerAlert('update');
    setTimeout(() => {
      this.router.navigate(['edit'], { relativeTo: this.route });
    }, 1000);
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.id());
    this.triggerAlert('delete');
    this.alertSaveMessage();
    setTimeout(() => {
      this.router.navigate(['/recipes']);
    }, 5000);
  }

  triggerAlert(type: 'add' | 'update' | 'delete') {
    let message = '';
    switch (type) {
      case 'add':
        message =
          '🛍️ Ingredients added to your shopping list. Let’s get cooking!';
        break;
      case 'update':
        message =
          '🍳 You’re now editing this recipe — let’s make it even tastier!';
        break;
      case 'delete':
        message =
          '🔥 Recipe removed from the cookbook — maybe it’ll make a comeback someday!';
        break;
    }

    this.alertType.set(type);
    this.alertMessage.set(message);
    this.showAlert.set(true);

    setTimeout(() => this.showAlert.set(false), 3000);
  }

  saveMessage = signal('');
  showSaveAlert = signal(false);

  alertSaveMessage() {
    const message =
      '💾 Your Cookbook changes aren’t saved yet. Press <strong>Save Recipe</strong> from the top menu under <strong>Cookbook</strong> to keep them!';
    this.saveMessage.set(message);
    this.showSaveAlert.set(true);
  }

  closeSaveAlert() {
    this.showSaveAlert.set(false);
    this.router.navigate(['/recipes']);
  }
}
