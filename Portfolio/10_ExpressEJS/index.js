const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let user = "";
let posts = [];

// Set EJS as the view engine
app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");

// Serve static files from the "public" directory
app.use(express.static("public"));

// Serve the form on the root endpoint
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html'); // Cambia esta ruta según donde tengas tu index.html
});

// Handle GET request to /login
app.get('/login', (req, res) => {
    const name = req.query.name; // Get name from query parameters
    if (name) {
        user = name;
        res.render('test', { name: user , method : 'GET' }); // Saludo para GET
    } else {
        res.send('Please provide a name in the query parameter.'); // Mensaje de error
    }
});

// Handle POST request to /login
app.post('/login', (req, res) => {
    const name = req.body.name; // Get name from body
    if (name) {
        user = name;
        res.render('test', { name: user, method : 'POST'}); // Saludo para POST
    } else {
        res.send('Please provide a name in the body of the request.'); // Mensaje de error
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

// Ruta para ver una publicación específica
app.get('/post/:id', (req, res) => {
    const postId = parseInt(req.params.id); // Obtener el ID de la URL
    const post = posts.find(p => p.id === postId); // Buscar la publicación por ID
    if (post) {
        res.render('post', { post }); // Renderizar la vista post.ejs con la publicación encontrada
    } else {
        res.send('Post not found.'); // Mensaje si la publicación no se encuentra
    }
});

app.post('/delete-post/:id', (req, res) => {
    const postId = parseInt(req.params.id); // Obtener el ID del post a eliminar
    posts = posts.filter(post => post.id !== postId);
    res.redirect('/blog');
});

app.get('/post', (req, res) => {
    res.render('post'); // Esto renderiza post.ejs
});

app.get('/blog', (req, res) => {
    res.render('home', { name: user, posts: posts }); // Renderiza la página de inicio del blog con los posts
});

// Start the server
app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});
