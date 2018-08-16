const chai = require('chai');
const should = chai.should();
const RecipeController = require('../../controllers/RecipeController');

describe('RecipeController.isInString', () => {
	context('when string does contain substring', () => {
		it('should return the boolean true', () => {
			const result = RecipeController.isInString('hello', 'hell');
	 		result.should.equal(true);
		});
	});
});

describe('RecipeController.doesAnyIngredientPassFilter', () => {
	context('when filter val matches at least one ingredient', () => {
		it('should return the boolean true', () => {
			const ingredients = ['chicken', 'lemon'];
			const filter = 'chicken';
			const result = RecipeController.doesAnyIngredientPassFilter(ingredients, filter);
			result.should.equal(true);
		});
	});
});

describe('RecipeController.recipePassesAllFilters', () => {
	context('when the recipe passes all provided filters', () => {
		it('should return the boolean true', () => {
			const recipe = { name: 'Lemon Chicken', cookingTime: '30 minutes' };
			const filters = { name: 'chicken', 'cookingTime': 30 };
			const result = RecipeController.recipePassesAllFilters(recipe, filters);
			result.should.equal(true);
		});
	});
});

describe('RecipeController.filterRecipes', () => {
	context('when multiple filters are applied', () => {
		it('should return an array of recipes that pass all filters', () => {
			const recipeData = [
				{ name: 'Lemon Chicken', cookingTime: '30 minutes' },
				{ name: 'BBQ Ribs', cookingTime: '50 minutes' },
				{ name: 'Chicken Caesar Salad', cookingTime: '30 minutes' },
			];
			const filters = { name: 'chicken', 'cookingTime': 30 };
			const recipes = RecipeController.filterRecipes(recipeData, filters);
			recipes.should.be.a('array');
			recipes.should.have.lengthOf(2);
			/* We should also check that the correct objects (with correct props) are returned */
		});
	});
});	