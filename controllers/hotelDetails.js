// get the hotel details 
module.exports = function (app) {
    var HotelDetails = app.models.HotelDetails;

    app.get('/api/hotelDetails', function (req, res) {
        HotelDetails.findOne({}, function (err, data) {
            res.send(data);
        });
    });

};