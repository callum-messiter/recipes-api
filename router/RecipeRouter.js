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
 * @apiParam {String} [filters] A key-value pair, where the key represents a recipe property (e.g. name) and the value represents the filter that is to be 
 * applied to the recipes
 * @apiSuccessExample {json} Success-Response (200): 
 * Recipe[]
 */
router.get('/recipe/list', (req, res, next) => {
	RecipeController.list(req, res, next);
});

module.exports = router;