import { Component, ViewChild, ElementRef , Output , EventEmitter} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shoping-list-edit',
  templateUrl: './shoping-list-edit.component.html',
  styleUrls: ['./shoping-list-edit.component.css']
})
export class ShopingListEditComponent {
  @ViewChild('nameInput') name!:ElementRef;
  @ViewChild('amountInput') amount!:ElementRef;
  @Output() ingredientAdded=new EventEmitter<Ingredient>();

onAddClick(){
  const name = this.name.nativeElement.value;
  const value = this.amount.nativeElement.value;
  const newIngredient = new Ingredient(name, value);
  this.ingredientAdded.emit(newIngredient);
}
}
