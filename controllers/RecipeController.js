const recipes = require('../data/recipes');

const list = (req, res, next) => {
	res.json( { endpoint: recipes} );
}

module.exports = { list };