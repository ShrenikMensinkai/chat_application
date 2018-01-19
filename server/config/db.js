var mongoose = require('mongoose');

var connection = mongoose.connect('mongodb://localhost/chart_system');

module.exports = connection;