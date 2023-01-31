const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home-page.html')
    });

app.get('/cat', (request, response, next) => {
    response.sendFile(__dirname + '/views/cat-page.html')
    });

// Server Started
app.listen(3000, () => console.log('Listening on port 3000! '));


