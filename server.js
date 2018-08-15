const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded( { extended: true } ));
app.use(bodyParser.json());

const server = app.listen(port, () => {
	console.log(`Server is listening on port ${port}...`);
});