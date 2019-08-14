
var mongoose = require('mongoose');


var hotelDetailsSchema = new mongoose.Schema({
  name: { type: String },
  address: {
      addr1: {type: String},
      addr2: {type: String},
      addr3: {type: String}
  },
  items: {
      map: {type: String},
      photos: {type: String},
      amenities: {type: String}
  },
    image: {
      type: String
    }
});

exports.HotelDetailsSchema = module.exports.HotelDetailsSchema = hotelDetailsSchema;
exports.boot = module.exports.boot = function (app) {
    mongoose.model('HotelDetails', hotelDetailsSchema);
    return app.models.HotelDetails = mongoose.model('HotelDetails');
};