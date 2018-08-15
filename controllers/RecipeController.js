const list = (req, res, next) => {
	res.json( { endpoint: 'list'} );
}

module.exports = { list, get };