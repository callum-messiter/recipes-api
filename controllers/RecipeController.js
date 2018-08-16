const recipeData = require('../data/recipes');
const Recipe = require('../models/RecipeModel');
const e = require('../middleware/Error').list;
const _ = require('underscore');

/* Main controller function */
const list = (req, res, next) => {
	if(_.size(req.query) > 0) {
		/* Check param is stringified JSON object; if so, filter recipes */
		try {
			const filteredRecipes = filterRecipes(recipeData, req.query);
			const recipesResponse = buildRecipeArray(filteredRecipes);
			return res.status(200).json(recipesResponse);
		} catch(err) {
			return next(e.malformedJson); /* Error handler middlware will deal with this */
		}
	}

	/* If request contains no filter params, return all recipes */
	const recipesResponse = buildRecipeArray(recipeData);	
	return res.status(200).json(recipesResponse)
}

/*** 
	The following functions might in a larger application be abstracted into the service layer.
	For simplicity's sake I'll just leave it here for now.
***/

/* 
	The client may provide multiple filters. 
	We return only recipes that match *all* provided filters
*/
const filterRecipes = (recipes, filters) => {
	let filteredRecipes = [];
	for(const recipe of recipes) {
		const passesAllFilters = recipePassesAllFilters(recipe, filters);
		if(passesAllFilters) { filteredRecipes.push(recipe) };
	}
	return filteredRecipes;
}

/*
	Here we specify how each recipe property should be filtered. 
	E.g. for `name`, `imageUrl`, `cookingTime`, we simply check if
	the corresponding recipe property contains the filter string provided
	by the client. E.g. if the filter ` name='lemon' ` is provided, 
	returned will be all recipes whose `name` property contains the string 'lemon'.
*/
const recipePassesAllFilters = (recipe, filters) => {
	for(const key in filters) {
		const filterValue = filters[key];
		switch(key) {
			case 'name':
			case 'imageUrl':
			case 'cookingTime':
				if(!isInString(recipe[key], filterValue)) return false;
				break;
			case 'ingredients':
				const ing = recipe.ingredients;
				const doesMatchIngredient = doesAnyIngredientPassFilter(ing, filterValue);
				if(!doesMatchIngredient) return false;
				break;
			default:
				continue;
		}
	}
	return true;
}

/*
	If the filter ` ingredients='beef' ` is provided, we must check if *any*
	of the recipe's ingredients contain the filter value 'beef'
*/
const doesAnyIngredientPassFilter = (ingredients, filter) => {
	let wasIngredientFound = false;
	for(const ingredient of ingredients) {
		if(isInString(ingredient, filter)) {
			wasIngredientFound = true;
		}
	}
	return wasIngredientFound;
}

const isInString = (name, filter) => {
	name = name.toString().toLowerCase();
	filter = filter.toString().toLowerCase();
	return name.indexOf(filter) >= 0;
}

/* 
	Rather than returning the recipes.js data directly, we use the RecipeModel 
	to build the object for the sake of consistency
*/
const buildRecipeArray = (recipeData) => {
	let recipes = [];
	for(const r of recipeData) {
		const recipe = new Recipe(r.name, r.imageUrl, r.cookingTime, r.ingredients);
		recipes.push(recipe);
	}
	return recipes;
}

module.exports = { 
	list, 
	filterRecipes, 
	recipePassesAllFilters, 
	doesAnyIngredientPassFilter, 
	isInString, 
	buildRecipeArray
};