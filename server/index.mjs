import express from 'express'
const app = express()
import path    from 'path'
import expressReactViews from 'express-react-views'

const port = process.env.PORT || 8080;

const __dirname = path.resolve()

// express-react-views
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jsx');
app.engine('jsx', expressReactViews.createEngine());

// app.use(express.static(path.join(path.resolve(), 'public')));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res, next) => {
    res.render('index', { data: 'test'});
});

app.listen(port, () => {
    console.log(`Listening on port ${port} ...`);
});

