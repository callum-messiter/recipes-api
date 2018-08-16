const express = require('express');
const app = express();
const router = require('./router');
const errorHandler = require('./middleware/Error').handler;
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const port = 3000;

app.use(cors());
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );
app.use( express.static( path.join(__dirname, 'public') ) );
app.use('/', router);
app.use(errorHandler);

const server = app.listen(port, () => console.log(`Listening on port ${port}...`) );