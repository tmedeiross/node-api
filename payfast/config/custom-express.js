var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function () {
    var app = express();

    app.use(bodyParser.urlencoded({extend: true}));
    app.use(bodyParser.json());

    app.use(expressValidator());
    
    consign()
        .include('controllers')
        .then('persistencia')
        .into(app);

    return app;
}

