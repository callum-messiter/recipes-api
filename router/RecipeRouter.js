const router = require('express').Router();

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
	res.json({ success: true });
});

/**
 * @api {get} /recipe/:recipeId Get
 * @apiGroup Recipe
 * @apiVersion 1.0.0
 * @apiName Get
 * @apiDescription This endpoint should be used for retrieving the details of a specific recipe.
 * @apiSuccessExample {json} Success-Response (200): 
 * {
 *     "name": String,
 *     "imageUrl": String,
 *     "ingredients": String[],
 *     "cookingTime": String
 * }
 * @apiErrorExample recipeNotFound (404): 
 * {  
 *     "error": "recipeNotFound",
 *     "msg": "Sorry, this recipe doesn't exist or may have been removed"
 * }
 */
router.get('/recipe/:recipeId', (req, res, next) => {
	res.json({ success: true });
});

module.exports = router;