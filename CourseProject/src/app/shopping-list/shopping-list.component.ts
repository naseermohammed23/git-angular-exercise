import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient [] = [
    new Ingredient('Onions', 10),
    new Ingredient('Curd', 2)
  ];

  constructor() { }

  ngOnInit() {
  }

  updateIngrediantList(tempIngredient: Ingredient) {
    this.ingredients.push(tempIngredient);
  }
}
