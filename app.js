const express = require('express');
const app = express();
const path = require('path');
app.use('/public', express.static(__dirname + '/public'));
app.use('/views', express.static(__dirname + '/views'));
app.listen(process.env.PORT || 3000, () => {
    console.log(`Corriendo en el servidor ${server.address().port}`)
});
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname + '/views/home.html')));
app.get('/register', (req, res) => res.sendFile(path.resolve(__dirname + '/views/register.html')));
app.get('/login', (req, res) => res.sendFile(path.resolve(__dirname + '/views/login.html')));