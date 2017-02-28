var mongoose = require('mongoose');

// Create Schema 
var divisionSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	image_url: {
		type: String
	},
	description: {
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Division = module.exports = mongoose.model('Division', divisionSchema);

// Get Divisions
module.exports.getDivisions = function(callback, limit){
	Division.find(callback).limit(limit);
}

// Get Divisions
module.exports.getDivisionById = function(id, callback){
	Division.findById(id, callback);
}
// Add Division
module.exports.addDivision = function(division, callback){
	Division.create(division, callback);
}

// Update Division
module.exports.updateDivision = function(id, division, options, callback){
	var query = {_id: id};
	var update = {
		name: division.name, 
		image_url: division.image_url,
		description: division.description
	}
	Division.findOneAndUpdate(query, update, options, callback);
}

// Delete Division
module.exports.removeDivision = function(id, callback){
	var query = {_id: id};
	Division.remove(query, callback);
}
