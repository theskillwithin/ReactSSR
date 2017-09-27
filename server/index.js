const express = require('express');
const app     = express();
const path    = require('path');
const render  = require('./render');

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res, next) => {
    render(req, res);
});

app.get('/about', (req, res, next) => {
    render(req, res);
});

app.get('/counter', (req, res, next) => {
    render(req, res);
});

app.get('/counter/:count', (req, res, next) => {
    render(req, res);
});

app.listen(port, () => {
    console.log(`Listening on port ${port} ...`);
});
