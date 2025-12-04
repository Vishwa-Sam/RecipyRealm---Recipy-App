import { Component } from '@angular/core';
import { imageAnimation, textAnimation } from '../recipe.animation';

@Component({
  selector: 'app-recipe-start',
  standalone: true,
  imports: [],
  animations: [imageAnimation, textAnimation],
  templateUrl: './recipe-start.component.html',
  styleUrl: './recipe-start.component.css'
})
export class RecipeStartComponent {
}
