import { Component, inject, input } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  recipe = input<Recipe>();
  id = input<number>();

  private router = inject(Router);
  private route = inject(ActivatedRoute);

  goToDetail() {
    this.router.navigate([this.id], { relativeTo: this.route });
  }
}
