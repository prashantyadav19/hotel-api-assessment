var mongoose = require('mongoose');


var hotelRoomsSchema = new mongoose.Schema({
    hotelRooms: []
});

exports.HotelRoomsSchema = module.exports.HotelRoomsSchema = hotelRoomsSchema;
exports.boot = module.exports.boot = function (app) {
    mongoose.model('HotelRooms', hotelRoomsSchema);
    return app.models.HotelRooms = mongoose.model('HotelRooms');
};