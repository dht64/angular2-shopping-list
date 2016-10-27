import {Component} from "angular2/core";
import {RecipeService} from "./recipe.service";
import {RecipeListComponent} from "./recipe-list.component";
import {RouteConfig} from "angular2/router";
import {RecipeDetailComponent} from "./recipe-detail.component";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RecipeEditComponent} from "./recipe-edit.component";

@Component({
	selector: 'my-recipes',
	template: `
		<div class="containter" style="padding-top:50px;">
			<div class="row">
				<div class="col-md-6 master">
					<my-recipe-list></my-recipe-list>
				</div>
				<div class="col-md-6 detail">
					<router-outlet></router-outlet>
				</div>	
			</div>
		</div>
	`,
	providers: [RecipeService],
	directives: [RecipeListComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
	{path: '/', name: 'RecipeDetail', component: RecipeDetailComponent, useAsDefault: true},
	{path: '/:editMode', name: 'RecipeEdit', component: RecipeEditComponent},

])

export class RecipesComponent {

}