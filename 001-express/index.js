import express from "express";
import morgan from "morgan";
import path from 'path';
import bodyParse from 'body-parser';

const app = express();

app.use(morgan('dev'));
app.use(bodyParse.urlencoded({extended: false}))

let comments = [];
app.locals.comments = comments;

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/comments', (req, res) => {
    res.render('comments/index');
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

app.post('/comments/new', (req, res) => {
    if(!req.body.comment) {
        res.status(400).send('Do you something to say?');
        return
    }
    comments.push({
        comment: req.body.comment,
        created_at: new Date()
    });
    res.redirect('/comments');
})

app.listen(3000, () => {
    console.log('Listen port: 3000');
})