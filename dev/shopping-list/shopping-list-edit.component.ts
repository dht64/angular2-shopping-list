import {Component} from "angular2/core";
import {Ingredient} from "../shared/ingredient";
import {ShoppingListService} from "../shared/shopping-list.service";

@Component({
	selector: 'my-shopping-list-edit',
	template: `
		<h2 class="text-info">{{ingredient === null ? 'Add' : 'Edit'}} Item</h2>
		<form class="form-group form-inline" id="shopping-list-add" (ngSubmit)="onSubmit(f.value)" #f="ngForm">
			<label for="item-name">Name</label>
			<input class="form-control" type="text" id="item-name" required [ngModel]="ingredient?.name" ngControl="name" />
			
			<label for="item-amount">Amount</label>
			<input class="form-control" type="text" id="item-amount" required [ngModel]="ingredient?.amount" ngControl="amount" />
			
			<button class="btn btn-primary" type="submit">{{ingredient === null ? 'Add' : 'Edit'}}</button>
			<button class="btn btn-warning" *ngIf="ingredient !== null" (click)="onDelete()">Delete Item</button>
		</form>
	`,
	inputs: ['ingredient'],
	styleUrls: ['src/css/shopping-list.css'],
})

export class ShoppingListEditComponent {
	ingredient: Ingredient;

	constructor(private _shoppingListService: ShoppingListService) {}

	onSubmit(item: Ingredient) {
		this.ingredient !== null ? this._shoppingListService.updateItem(this._shoppingListService.getIndexOfItem(this.ingredient), item) :
			this._shoppingListService.insertItem(item);
	}

	onDelete() {
		this._shoppingListService.deleteItem(this.ingredient);
		this.ingredient = null;
	}
}