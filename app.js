var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var app = express();
var port = 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: false}));
app.set('view engine', 'ejs');
//app.set('/public', __dirname+'/public');
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next){
	res.render("photos","");
});

app.listen(port);
console.log('server running with port 3003....')
