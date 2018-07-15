// var express = require('express'),
//     path = require('path'),
//     open = require('open'),
//     port = 3000,
//     app = express();

import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

// we are going to tell express to use our webpack dev middle ware
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, // not to display anything special info
    publicPath: config.output.publicPath // configure public path
}));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
    if (err) {
        console.log(err); // eslint-disable-line no-console
    } else {
        open('http://localhost:' + port)
    }
});