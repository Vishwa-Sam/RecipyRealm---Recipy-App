import { Injectable, signal } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  startedEditing = signal<number | null>(null);

  ingredients = signal<Ingredient[]>([
    new Ingredient('Apples', 5, 'Numbers'),
    new Ingredient('Tomatoes', 10, 'Numbers'),
  ]);

  getIngredient(index: number): Ingredient {
    return this.ingredients()[index];
  }

  onAddIngredient(ingredient: Ingredient) {
    this.ingredients.update((items) => {
      const updated = [...items];
      const existing = updated.find((i) => i.name === ingredient.name);
      if (existing) {
        existing.amount += ingredient.amount;
      } else {
        updated.push(
          new Ingredient(ingredient.name, ingredient.amount, ingredient.measure)
        );
      }
      return updated;
    });
  }

  addNewIngredients(ingredients: Ingredient[]) {
    this.ingredients.update((items) => {
      const updateIngredients = [...items];
      ingredients.forEach((newItem) => {
        const existing = updateIngredients.find((i) => i.name === newItem.name);
        if (existing) {
          existing.amount += newItem.amount;
        } else {
          updateIngredients.push(
            new Ingredient(newItem.name, newItem.amount, newItem.measure)
          );
        }
      });
      return updateIngredients;
    });
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients.update((items) => {
      const updated = [...items];
      if (index >= 0 && index < updated.length) {
        updated[index] = newIngredient;
      }
      return updated;
    });
  }

  deleteIngredient(index: number) {
    this.ingredients.update((items) => items.filter((_, i) => i !== index));
  }
}

//without the use of signals 

// ingredientAdded = new EventEmitter<Ingredient[]>()

// ingredients: Ingredient[] = [
//   new Ingredient('Apples', 5),
//   new Ingredient('Tomatoes', 10)
// ];

// getIngredients() {
//   return this.ingredients.slice();
// }

// onAddIngredient(ingredient: Ingredient) {
//   this.ingredients.push(ingredient);
//   this.ingredientAdded.emit(this.ingredients.slice());
// }

// updateIngredients(ingredients: Ingredient[]){
//   ingredients.forEach( items => {
//     const ingredientCopy = new Ingredient(items.name, items.amount);
//     const existing = this.ingredients.find(i => i.name === ingredientCopy.name);
//     if (existing) {
//       existing.amount += ingredientCopy.amount;
//     } else {
//       this.ingredients.push(ingredientCopy);
//     }
//   });

//   this.ingredientAdded.emit(this.ingredients.slice());
// }
