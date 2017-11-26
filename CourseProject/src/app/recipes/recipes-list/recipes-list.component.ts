import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() selectedItem = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Biryani', 'Hyderabadi Biryani',
    'https://upload.wikimedia.org/wikipedia/commons/7/7c/Hyderabadi_Chicken_Biryani.jpg'),
    new Recipe('Nahari Paya', 'Hyderabadi Paya',
    'http://yummyindiankitchen.com/wp-content/uploads/2015/11/marag-recipe-hyderabadi.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipeSelected: Recipe) {
    this.selectedItem.emit(recipeSelected);
  }

}
