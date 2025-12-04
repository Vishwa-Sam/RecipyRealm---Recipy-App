import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { ShoppingListService } from './shopping-list.service';
import {
  gifAnimation,
  ingredientsUpdateAnimation,
} from './shopping-list.animation';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ShoppingListEditComponent, CommonModule],
  animations: [ingredientsUpdateAnimation, gifAnimation],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {
  constructor(private shoppingListService: ShoppingListService) {}

  ingredients = this.shoppingListService.ingredients;

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.set(index);
  }

  gifList: string[] = [
    'assets/ingredients.gif',
    'assets/ingredients2.gif',
    'assets/ingredients3.gif',
    'assets/ingredients4.gif',
    'assets/ingredients5.gif',
    'assets/ingredients6.gif',
  ];
}

// ingredients:Ingredient[]| undefined;
// ngOnInit() {
//     this.ingredients = this.shoppingListService.getIngredients();
//     this.ingredients = this.shoppingListService.ingredients();
//     // this.shoppingListService.ingredientAdded.subscribe((ingredient: Ingredient[]) => {
//     //   this.ingredients = ingredient
//     // })
//   }
