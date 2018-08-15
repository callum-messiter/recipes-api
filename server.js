const express = require('express');
const app = express();
const router = require('./router');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;

app.use(cors());
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );
app.use('/', router);

const server = app.listen(port, () => console.log(`Listening on port ${port}...`) );