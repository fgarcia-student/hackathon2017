const express = require('express');
const app = express();
const path = require("path");

app.use(express.static('static'));

app.listen(3003, () => {
	console.log('Listening on 3003');
})

app.get('/',function(req, res){
	res.sendFile('index.html');
});

 app.get('/ezbot',function(req,res){
 	res.sendFile(path.join(__dirname, '/static', 'ezbot.html'));


 });

app.get('*', function(req,res){
	res.status(404).send("page doesn't exist!");

});