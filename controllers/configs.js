// method is use to find the pre configure values of dropDowns
module.exports = function (app) {
    var Configs = app.models.Configs;

    app.get('/api/configurations', function (req, res) {
        Configs.findOne({}, function (err, data) {
            res.send(data);
        });
    });

};