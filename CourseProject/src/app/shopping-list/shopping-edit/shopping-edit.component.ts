import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameEle') nameEleRef: ElementRef;
  @ViewChild('amountEle') amountEleRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addIngredient() {
    const name = this.nameEleRef.nativeElement.value;
    const amount = this.amountEleRef.nativeElement.value;
    const ingrediantObj = new Ingredient(name, amount);
    this.ingredientAdded.emit(ingrediantObj);
  }
}
