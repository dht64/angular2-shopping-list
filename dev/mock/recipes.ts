import {Recipe} from "../shared/recipe";
import {Ingredient} from "../shared/ingredient";

export let RECIPES: Recipe[] = [
	new Recipe('Pasta', 
		'A Tasty Pasta',
		'http://i.ndtvimg.com/i/2015-07/spaghetti_625x350_61436865755.jpg',
		[
			new Ingredient('Dried Linguine', 400),
			new Ingredient('Olive Oil', 1),
			new Ingredient('Tomato passata', 350),
			new Ingredient('Baby Capers', 5),
			new Ingredient('Lemon', 1),
		]),
	new Recipe('Delicious Pizza',
		'Awesome pizza',
		'http://cdn.jamieoliver.com/recipe-database/oldImages/xtra_med/1474_2_1430128688.jpg',
		[
			new Ingredient('White bread flour', 250),
			new Ingredient('Wholemeal flour', 250),
			new Ingredient('Sachet dried yeast', 1),
		])
];