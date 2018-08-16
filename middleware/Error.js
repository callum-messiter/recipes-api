const handler = (err, req, res, next) => {
	console.log(err);
	/* Check that the error is an anticipated one */
	if(list.hasOwnProperty(err.err)) {
		res.status(list[err.err].statusCode)
		return res.json(err);
	}
	/* If the error is unanticipated, return a general 500 */
	res.status(list.internalServerError.statusCode);
	res.json(list.internalServerError);
}

const list = {
	malformedJson: {
		err: 'malformedJson',
		msg: 'The `filters` param must be a valid stringified JSON object.',
		statusCode: 500
	},
	internalServerError: {
		err: 'internalServerError',
		msg: 'An unanticipated server error occurred.',
		statusCode: 500
	}
}

module.exports = { handler, list };