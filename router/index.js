const router = require('express').Router();

/* Import all routers here */
const RecipeRouter = require('./RecipeRouter');

/* 'Register' all imported routers here */
router.use(RecipeRouter);

/* Direct root requests to documentation */
router.use('/', (req, res, next) => res.redirect('/docs') );

module.exports = router;
