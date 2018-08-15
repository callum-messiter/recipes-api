const list = (req, res, next) => {
	res.json( { endpoint: 'list'} );
}

const get = (req, res, next) => {
	res.json( { endpoint: 'get'} )
}

module.exports = { list, get };