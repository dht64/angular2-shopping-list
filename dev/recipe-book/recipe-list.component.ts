import {Component} from 'angular2/core';
import {Recipe} from "../shared/recipe";
import {OnInit} from "angular2/core";
import {RecipeService} from "./recipe.service";
import {Router} from "angular2/router";

@Component({
	selector: 'my-recipe-list',
	template: `
		<button class="btn btn-primary" (click)="onAddRecipe()">Add Recipe</button>
		<ul class="list-group">
			<li class="list-group-item" *ngFor="#item of recipes" (click)="onSelect(item)">
				<div class="text-center">
					<img class="recipeImg img-responsive img-thumbnail" [src]="item.imageUrl" alt="recipe" />
				</div>
				<h4 class="text-center text-primary">{{item.name}}</h4>
			</li>
		</ul>
	`
})

export class RecipeListComponent implements OnInit {
	recipes: Recipe[];

	constructor(private _recipeService: RecipeService, private _router: Router) {}

	onSelect(item: Recipe) {
		this._router.navigate(['RecipeDetail', {recipeIndex: Number(this._recipeService.getRecipeIndex(item))}]);
	}

	onAddRecipe() {
		this._router.navigate(['RecipeEdit', {editMode: 'create'}]);
	}

	ngOnInit():any {
		this.recipes = this._recipeService.getAllRecipes();
	}
}