import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public duration: string;
  public cookingMethod: string[];
  public ingredients: Ingredient[];
  public cuisine: string;
  public category: string;
  public id: number;

  constructor(
    name: string,
    desc: string,
    imagePath: string,
    time: string,
    method: string[],
    ingredient: Ingredient[],
    cuisine: string,
    cate: string,
    id: number
  ) {
    this.id = id ?? Date.now();
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.duration = time;
    this.cookingMethod = method;
    this.ingredients = ingredient;
    this.cuisine = cuisine;
    this.category = cate;
  }
}
