const recipeData = require('../data/recipes');
const Recipe = require('../models/RecipeModel');

const list = (req, res, next) => {
	if(req.query.filters) {
		/* Check param is stringified JSON object; if so, filter recipes */
		try {
			const filters = JSON.parse(req.query.filters);
			const filteredRecipes = filterRecipes(recipeData, filters);
			const recipesResponse = buildRecipeArray(filteredRecipes);
			return res.status(200).json(recipesResponse);
		} catch(e) {
			return res.status(500).json({
				error: 'malformedReqParam', 
				msg: 'The `filters` param must be a valid stringified JSON object.' 
			});
		}
	}

	/* If request contains no filter params, return all recipes */
	const recipesResponse = buildRecipeArray(recipeData);	
	return res.status(200).json(recipesResponse)
}

const filterRecipes = (recipes, filters) => {
	let filteredRecipes = [];
	for(const recipe of recipes) {
		const passesAllFilters = recipePropPassesAllFilters(recipe, filters);
		if(passesAllFilters) { filteredRecipes.push(recipe) };
	}
	return filteredRecipes;
}

const recipePropPassesAllFilters = (recipe, filters) => {
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
	name = name.toLowerCase(), filter = filter.toLowerCase();
	return name.indexOf(filter) >= 0;
}

/* Rather than returning the recipes.js data directly, we use the RecipeModel to build the object for the sake of consistency */
const buildRecipeArray = (recipeData) => {
	let recipes = [];
	for(const r of recipeData) {
		const recipe = new Recipe(r.name, r.imageUrl, r.cookingTime, r.ingredients);
		recipes.push(recipe);
	}
	return recipes;
}

module.exports = { list };