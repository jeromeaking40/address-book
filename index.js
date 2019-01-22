const express = require('express');
const app = express();
const morgan = require('morgan');

//MIDDLEWARE
app.use(morgan('tiny'));

app.use(express.static('public'));

//SERVER
app.listen(5000, err => {
	console.log('The port is listening on 5000');
});
