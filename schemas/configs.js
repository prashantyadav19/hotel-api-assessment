// configure mongoose schemas
var mongoose = require('mongoose');

var configsSchema = new mongoose.Schema({
    adults: [],
    children: []
});

exports.ConfigsSchema = module.exports.ConfigsSchema = configsSchema;
exports.boot = module.exports.boot = function (app) {
    mongoose.model('Configs', configsSchema);
    return app.models.Configs = mongoose.model('Configs');
};