require('babel-polyfill');

const express = require('express');
const path = require('path');
const port = 80;

const app = express();

app.use('/iw/', express.static(__dirname + '/pages/iw/public'));
app.get('/iw/*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'pages/iw/public', 'index.html'));
});

app.use('/ww2/', express.static(__dirname + '/pages/ww2/public'));
app.get('/ww2/*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'pages/ww2/public', 'index.html'));
});

app.use('/', express.static(__dirname + '/pages/index/public'));
app.get('/*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'pages/index/public', 'index.html'));
});

app.listen(port);
console.log('Express server started on port ' + port);