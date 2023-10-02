import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-sopping-list',
  templateUrl: './sopping-list.component.html',
  styleUrls: ['./sopping-list.component.css'],
})
export class SoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() {}

  formInput = (event) => {
    this.ingredients.push(new Ingredient(event.name, event.amount));
  };

  onSelectHandler = (index: number) => {
    const isSelected = this.ingredients[index].selected;
    this.ingredients[index].selected = !isSelected;
  };

  updateIngredient = (event: Ingredient[]) => {
    this.ingredients = event;
  };
}
