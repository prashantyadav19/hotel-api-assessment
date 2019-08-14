var express = require('express');
var mongoose = require('mongoose');
var dbUrl = require('./dbUrl');
var bodyParser = require('body-parser');
var fs = require('fs');
var cors = require('cors');

var app = express();

// connect with database
mongoose.connect(dbUrl.DB_URL);
mongoose.connection.on('error', function() {
  console.error('MongoDB Connection Error.');
});

// set app port
var port = process.env.PORT || 8080;
app.set('port', port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// read all schemas
var schema_files, schemas;
app.models = {};
schemas = __dirname + '/schemas';
schema_files = fs.readdirSync(schemas);
schema_files.forEach(function (file) {
  return (require(schemas + '/' + file)).boot(app);
});

// read all controllers file
var controllers = __dirname + '/controllers';
var controller_files = fs.readdirSync(controllers);
controller_files.forEach(function (file) {
  return (require(controllers + '/' + file))(app);
});

// use cors
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    if ('OPTIONS' == req.method) {
        res.send(204);
    }
    else {
        next();
    }
});

app.listen(app.get('port'), function() {
  console.log('Server is running on the port ' + app.get('port'));
});