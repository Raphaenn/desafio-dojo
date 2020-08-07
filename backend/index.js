'use strict';

var express = require('express');
var kraken = require('kraken-js');

var options, app;

options = {
    onconfig: function (config, next) {
        next(null, config);
    },
};

app = module.exports = express();
app.use(kraken(options));
app.on('start', function () {
    console.log('Environment: %s', app.kraken.get('env:env'));
});
