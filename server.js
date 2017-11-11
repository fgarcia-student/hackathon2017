const express = require('express');
const bodyParser = require('body-parser');

const app = express();


//app setup--express
app.use(bodyParser.json({type:'*/*'}));
app.use(express.static('static'));

app.listen(3003, () => {
	console.log('Listening on 3003');
})

