import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

import { RecipeService } from '../recipe.service';
import { recipeFormAnimation } from '../recipe.animation';
import { DropdownDirective } from '../../shared/dropdown.directive';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, DropdownDirective],
  animations: [recipeFormAnimation],
  host: { '[@recipeFormAnimation]': '' },
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  editMode = false;
  recipeForm!: FormGroup;
  alertMessage = signal('');
  alertType = signal('');
  showAlert = signal(false);

  private recipeService = inject(RecipeService);
  private router = inject(Router);
  private routes = inject(ActivatedRoute);

  openDropdown: 'category' | 'cuisine' | null = null;
  categories = ['Non-Vegetarian', 'Vegetarian'];
  cuisines = [
    'Indian Cuisine',
    'Italian Cuisine',
    'American Cuisine',
    'Asian Cuisine',
    'Mexican Cuisine',
    'Japanese Cuisine',
  ];

  id = toSignal(
    this.routes.paramMap.pipe(map((params) => Number(params.get('id')))),
    { initialValue: -1 }
  );

  ngOnInit() {
    this.routes.paramMap.subscribe((params) => {
      const idParam = params.get('id');
      if (idParam) {
        // Edit mode
        this.editMode = true;
        const recipe = this.recipeService.getRecipeById(Number(idParam));
        this.initForm(recipe);
      } else {
        this.editMode = false;
        this.initForm(); // empty form
      }
    });
  }

  onSubmit() {
    const formValues = this.recipeForm.value;
    const newId = this.editMode ? this.id() : Date.now();
    const newRecipe = { ...formValues, id: Number(newId) };

    if (this.editMode) {
      this.recipeService.updateRecipe(Number(this.id()), newRecipe);
      this.triggerAlert('update');
      this.router.navigate(['/recipes', newRecipe.id]);
    } else {
      this.recipeService.addRecipe(newRecipe);
      this.triggerAlert('add');
      this.router.navigate(['/recipes', newRecipe.id]);
    }

    this.alertSaveMessage();
  }

  onAddIngredient() {
    this.ingredients.push(
      new FormGroup({
        name: new FormControl('', [Validators.required]),
        amount: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  onRemoveIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  onClearAllIngredients() {
    this.ingredients.clear();
  }

  onAddMethodStep() {
    this.cookingMethod.push(new FormControl('', Validators.required));
  }

  onRemoveMethodStep(index: number) {
    this.cookingMethod.removeAt(index);
  }

  onClearAllMethodSteps() {
    this.cookingMethod.clear();
  }

  onCancel(showCancelAlert: boolean = true) {
    if (showCancelAlert) {
      this.triggerAlert('cancel');
      this.alertSaveMessage();
    }

    setTimeout(() => {
      this.router.navigate(['../'], { relativeTo: this.routes });
    }, 1000);
  }

  private initForm(recipe?: any) {
    const recipeName = recipe?.name || '';
    const recipeImagePath = recipe?.imagePath || '';
    const recipeDescription = recipe?.description || '';
    const recipeDuration = recipe?.duration || '';
    const recipeCategory = recipe?.category || 'Non-Vegetarian';
    const recipeCuisine = recipe?.cuisine || 'Indian Cuisine';

    const recipeIngredients = new FormArray<FormGroup>(
      recipe?.ingredients?.map(
        (ingredient: Ingredient) =>
          new FormGroup({
            name: new FormControl(ingredient.name, [Validators.required]),
            amount: new FormControl(ingredient.amount, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/),
            ]),
          })
      ) || []
    );

    const recipeMethod = new FormArray<FormControl>(
      recipe?.cookingMethod?.map(
        (step: string) => new FormControl(step, Validators.required)
      ) || []
    );

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, [Validators.required]),
      imagePath: new FormControl(recipeImagePath, [Validators.required]),
      duration: new FormControl(recipeDuration, [Validators.required]),
      category: new FormControl<'Non-Vegetarian' | 'Vegetarian'>(
        recipeCategory as any,
        { validators: [Validators.required] }
      ),
      cuisine: new FormControl<
        | 'Indian Cuisine'
        | 'Italian Cuisine'
        | 'American Cuisine'
        | 'Asian Cuisine'
        | 'Mexican Cuisine'
        | 'Japanese Cuisine'
        | 'Other Cuisine'
      >(recipeCuisine as any, { validators: [Validators.required] }),
      description: new FormControl(recipeDescription, [Validators.required]),
      cookingMethod: recipeMethod,
      ingredients: recipeIngredients,
    });
  }

  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  get cookingMethod(): FormArray {
    return this.recipeForm.get('cookingMethod') as FormArray;
  }

  get ingredientsControls() {
    return this.ingredients.controls;
  }

  get cookMethodControls() {
    return this.cookingMethod.controls;
  }

  toggleDropdown(type: 'category' | 'cuisine') {
    this.openDropdown = this.openDropdown === type ? null : type;
  }

  selectOption(type: 'category' | 'cuisine', value: string) {
    this.recipeForm.get(type)?.setValue(value);
    this.openDropdown = null;
  }

  triggerAlert(type: 'add' | 'update' | 'cancel') {
    let message = '';
    switch (type) {
      case 'add':
        message = '🥕 A fresh new recipe has been added to your cookbook!.';
        break;
      case 'update':
        message = '🍋 Recipe updated! Your dish just got an upgrade.';
        break;
      case 'cancel':
        message = '🍅 You left the kitchen midway — recipe creation canceled';
        break;
    }

    this.alertType.set(type);
    this.alertMessage.set(message);
    this.showAlert.set(true);

    setTimeout(() => this.showAlert.set(false), 2000);
  }

  saveMessage = signal('');
  showSaveAlert = signal(false);

  alertSaveMessage() {
    const message =
      '💾 Your recipe changes aren’t saved yet. Press <strong>Save Recipe</strong> from the top menu under <strong>Cookbook</strong> to keep them!';
    this.saveMessage.set(message);
    this.showSaveAlert.set(true);
  }

  closeSaveAlert() {
    this.showSaveAlert.set(false);
    this.router.navigate(['../'], { relativeTo: this.routes });
  }
}
