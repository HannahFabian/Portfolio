const express = require('express');
const app = express();
const path = require('path');

const names = []; 
let tasks = [];

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/html/index.html');
});

app.post('/greet', (req, res) => {
    const name = req.body.name; 
    if (name) {
        names.push(name); 
    }
    res.redirect('/');
});

app.route('/task')
    .post((req, res) => {
        const task = req.body.task; 
        if (task) {
            tasks.push(task); 
        }
        res.redirect('/'); 
    });

app.post('/delete-task', (req, res) => {
      const index = parseInt(req.body.index); 
      if (!isNaN(index)) {
          tasks.splice(index, 1); 
      }
      res.redirect('/'); 
  });

app.listen(8000, () => {
  console.log('Servidor escuchando en el puerto 8000');
});
