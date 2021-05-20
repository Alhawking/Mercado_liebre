const express = require('express');
const app = express();
const path = require('path');
app.use('/public/img', express.static(__dirname + '/public/img'));
app.use('/public/CSS', express.static(__dirname + '/public/CSS'));
app.use('/views', express.static(__dirname + '/views'));
app.listen(8080);
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/views/home.html'));
})