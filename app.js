var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Division = require('./models/division');
Product = require('./models/product');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/uniqloapp');
var db = mongoose.connection;

app.get('/', function(req, res){
	res.send('Welcome!');
});

app.get('/api/divisions', function(req, res){
	Division.getDivisions(function(err, divisions){
		if(err){
			throw err;
		}
		res.json(divisions);
	});
});

app.get('/api/divisions/:_id', function(req, res){
	Division.getDivisionById(req.params._id, function(err, division){
		if(err){
			throw err;
		}
		res.json(division);
	});
});

app.post('/api/divisions', function(req, res){
	var division = req.body;
	Division.addDivision(division, function(err, division){
		if(err){
			throw err;
		}
		res.json(division);
	});
});



app.put('/api/divisions/:_id', function(req, res){
	var id = req.params._id;
	var division = req.body;
	Division.updateDivision(id, division, {}, function(err, division){
		if(err){
			throw err;
		}
		res.json(division);
	});
});

app.delete('/api/divisions/:_id', function(req, res){
	var id = req.params._id;
	Division.removeDivision(id, function(err, division){
		if(err){
			throw err;
		}
		res.json(division);
	});
});

app.get('/api/products', function(req, res){
	Product.getProducts(function(err, products){
		if(err){
			throw err;
		}
		res.json(products);
	});
});

app.get('/api/products/:_id', function(req, res){
	Product.getProductById(req.params._id, function(err, product){
		if(err){
			throw err;
		}
		res.json(product);
	});
});

app.post('/api/products', function(req, res){
	var product = req.body;
	Product.addProduct(product, function(err, product){
		if(err){
			throw err;
		}
		res.json(product);
	});
});

app.put('/api/products/:_id', function(req, res){
	var id = req.params._id;
	var product = req.body;
	Product.updateProduct(id, product, {}, function(err, product){
		if(err){
			throw err;
		}
		res.json(product);
	});
});

app.delete('/api/products/:_id', function(req, res){
	var id = req.params._id;
	Product.removeProduct(id, function(err, product){
		if(err){
			throw err;
		}
		res.json(product);
	});
});

app.listen(3000);
console.log('Running on port 3000');
















