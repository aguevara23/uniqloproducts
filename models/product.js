var mongoose = require('mongoose');

// Create Schema 
var productSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	division:{
		type: String,
		required: true
	},
	description:{
		type: String,
	},
	color:{
		type: String,
		required: true
	},
	size:{
		type: String
	}, 
	sku:{
		type: String,
	},
	image_url:{
		type: String
	},
	buy_url:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Product = module.exports = mongoose.model('Product', productSchema);

// Get Products
module.exports.getProducts = function(callback, limit){
	Product.find(callback).limit(limit);
}

// Get Product
module.exports.getProductById = function(id, callback){
	Product.findById(id, callback);
}

// Add Product
module.exports.addProduct = function(product, callback){
	Product.create(product, callback);
}

// Update Product
module.exports.updateProduct = function(id, product, options, callback){
	var query = {_id: id};
	var update = {
		name: product.name,
		division: product.division,
		color: product.color,
		description: product.description,
		size: product.size,
		sku: product.sku,
		image_url: product.image_url,
		buy_url: product.buy_url
	}
	Product.findOneAndUpdate(query, update, options, callback);
}

// Delete Product
module.exports.removeProduct = function(id, callback){
	var query = {_id: id};
	Product.remove(query, callback);
}
