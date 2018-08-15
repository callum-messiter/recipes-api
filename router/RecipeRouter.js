const router = require('express').Router();
const RecipeController = require('../controllers/RecipeController');

/**
 * @apiDefine Recipe Recipe
 * Used by clients to retrieve recipe data 
 */

/**
 * @api {get} /recipe/list List
 * @apiGroup Recipe
 * @apiVersion 1.0.0
 * @apiName List
 * @apiDescription This endpoint should be used to retrieve a list of available recipes. The recipes can be filtered
 * using the below query parameters. If no query parameters are provided, all available recipes will be returned in the response object.
 * @apiParam {String} filters A stringified JSON object. Each property is a key-value pair where the key represents the recipe property, e.g. "ingredients", and
 * the value represents the filter to be applied to the list of recipes, e.g. "Lemon"
 * @apiSuccessExample {json} Success-Response (200): 
 * Recipe[]
 */
router.get('/recipe/list', (req, res, next) => {
	RecipeController.list(req, res, next);
});

/* 
	A endpoint for retrieving a specific recipe would be useful. A SPA may make use of this
	on a "recipe" screen, for example, which would show the details of a specific recipe. 
	This functionality would require each recipe object to have a unique `id` property, 
	so that it can be referenced in the route, e.g. '/recipe/:recipeId'. Using the recipe name 
	as a unique identifier would be sub-optimal.
*/

module.exports = router;