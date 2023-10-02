import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  name: string = '';
  amount: number = 0;

  @ViewChild('nameRef') nameReference: ElementRef;
  @ViewChild('amtRef') amountReference: ElementRef;
  @Output() formEdit = new EventEmitter<{ name: string; amount: number }>();
  @Input() shoppingList: Ingredient[];
  @Output() updatedIngredient = new EventEmitter<Ingredient[]>();

  handleClick = () => {
    this.formEdit.emit({
      name: this.nameReference.nativeElement.value,
      amount: this.amountReference.nativeElement.value,
    });

    this.clearFormInput();
  };

  clearFormInput = () => {
    this.name = '';
    this.amount = 0;
  };

  handleDeleteItems = () => {
    this.shoppingList = this.shoppingList.filter((ingredient: Ingredient) => {
      return !ingredient.selected;
    });

    this.updatedIngredient.emit(this.shoppingList);
  };
}
