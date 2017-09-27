import express from 'express'
const app = express()
import path    from 'path'
import render  from './render'


const port = process.env.PORT || 8080;

app.use(express.static(path.join(path.resolve(), 'public')));
app.use(express.static(path.join(path.resolve(), '../dist')));

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

