// get and set the hotelRooms values
module.exports = function (app) {
    var HotelRooms = app.models.HotelRooms;

    app.get('/api/hotelRooms', function (req, res) {
        HotelRooms.findOne({}, function (err, data) {
            res.send(data);
        });
    });

    app.post('/api/hotelRooms', function (req, res) {

        HotelRooms.findOne({}, function (err, data) {
            if (data) {
                data.hotelRooms = req.body.hotelRooms;
                data.save(function (err, data) {
                    res.send(data);
                })
            } else {
                var rooms = new HotelRooms(req.body);
                rooms.save(function (err, data) {
                    res.send(data);
                })
            }
        })

    });

};