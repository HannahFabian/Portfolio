const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let user = "";
let posts = [];

app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html'); 
});

app.get('/login', (req, res) => {
    const name = req.query.name; 
    if (name) {
        user = name;
        res.render('test', { name: user , method : 'GET' }); 
    } else {
        res.send('Please provide a name in the query parameter.'); 
    }
});

app.post('/login', (req, res) => {
    const name = req.body.name; 
    if (name) {
        user = name;
        res.render('test', { name: user, method : 'POST'}); 
    } else {
        res.send('Please provide a name in the body of the request.'); 
    }
});

app.post('/add-post', (req, res) => {
    const { title, content } = req.body;
    const newPost = { id: posts.length + 1, title, content };
    posts.push(newPost);
    res.render('home',{name: user , posts : posts});
});

app.post('/blog', (req, res) => {
    const name = req.body.name;
    user = name;
    res.render('home', {name: user , posts : posts});
});

app.get('/post/:id', (req, res) => {
    const postId = parseInt(req.params.id); 
    const post = posts.find(p => p.id === postId); 
    if (post) {
        res.render('post', { post }); 
    } else {
        res.send('Post not found.'); 
    }
});

app.post('/delete-post/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    posts = posts.filter(post => post.id !== postId);
    res.redirect('/blog');
});

app.get('/post', (req, res) => {
    res.render('post'); 
});

app.get('/blog', (req, res) => {
    res.render('home', { name: user, posts: posts }); 
});

app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});
