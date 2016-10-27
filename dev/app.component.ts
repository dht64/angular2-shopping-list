import {Component} from 'angular2/core';
import {RecipesComponent} from './recipe-book/recipes.component';
import {RouteConfig} from "angular2/router";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'my-app',
    template: `
    	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <nav class="navbar navbar-default navbar-fixed-top">
            <ul class="nav navbar-nav">
                <li><a [routerLink]="['Recipes']">Recipes</a></li>
                <li><a [routerLink]="['ShoppingList']">Shopping List</a></li>
            </ul>
        </nav>
        <div class="main">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/recipes/...', name: 'Recipes', component: RecipesComponent, useAsDefault: true},
    {path: '/shopping-list', name: 'ShoppingList', component: ShoppingListComponent},
])

export class AppComponent {

}