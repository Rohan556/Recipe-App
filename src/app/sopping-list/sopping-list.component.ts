import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-sopping-list',
  templateUrl: './sopping-list.component.html',
  styleUrls: ['./sopping-list.component.css']
})
export class SoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor(){

  }
}
