import { Component, effect, inject, signal, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css',
})
export class ShoppingListEditComponent {
  @ViewChild('form') shoppingForm!: NgForm;
  editMode = false;
  editedItemIndex!: number;
  editedItem!: Ingredient;

  alertMessage = signal('');
  alertType = signal('');
  showAlert = signal(false);

  private shoppingListService = inject(ShoppingListService);

  constructor() {
    effect(() => {
      const index = this.shoppingListService.startedEditing();
      if (index !== null) {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.shoppingForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
          measure: this.editedItem.measure,
        });
      }
    });
  }

  onAddIngredient(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(
      value.name,
      value.amount,
      value.measure
    );

    if (this.editMode === true) {
      this.shoppingListService.updateIngredient(
        this.editedItemIndex,
        newIngredient
      );
      this.triggerAlert('update');
    } else {
      this.shoppingListService.onAddIngredient(newIngredient);
      this.triggerAlert('add');
    }

    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.editMode = false;
    this.shoppingForm.reset();
    this.triggerAlert('clear');
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.triggerAlert('delete');
  }

  triggerAlert(type: 'add' | 'update' | 'delete' | 'clear') {
    let message = '';
    switch (type) {
      case 'add':
        message = '🥕 Ingredient added to your shopping basket successfully!';
        break;
      case 'update':
        message =
          '🍋 Ingredient details refreshed — your list just got tastier!';
        break;
      case 'delete':
        message =
          '🍅 Ingredient removed — time to make space for something new!';
        break;
      case 'clear':
        message = '🧺 Form cleared — ready for fresh ingredients!';
        break;
    }

    this.alertType.set(type);
    this.alertMessage.set(message);
    this.showAlert.set(true);

    setTimeout(() => this.showAlert.set(false), 3000);
  }
}

// ngOnInit() {
//   let subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
//     this.editedItemIndex = index;
//     this.editMode = true;
//     this.editedItem = this.shoppingListService.getIngredient(index);
//     this.shoppingForm.setValue({
//       name: this.editedItem.name,
//       amount: this.editedItem.amount
//     })
//   })
//   this.destroyRef.onDestroy(() => subscription.unsubscribe());
// }
