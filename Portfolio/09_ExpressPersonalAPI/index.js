const express = require('express');
const app = express();
const path = require('path');

const names = []; 
let tasks = [];

// Configurar la carpeta pública para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/html/index.html');
});

// Ruta para manejar el formulario de saludo y redirigir de vuelta a la raíz
app.post('/greet', (req, res) => {
    const name = req.body.name; 
    if (name) {
        names.push(name); 
    }
    res.redirect('/');
});

app.route('/task')
    .post((req, res) => {
        const task = req.body.task; // Obtener la tarea del formulario
        if (task) {
            tasks.push(task); // Agregar tarea
        }
        res.redirect('/'); // Redirigir a la página principal
    });

app.post('/delete-task', (req, res) => {
      const index = parseInt(req.body.index); // Obtener el índice de la tarea a eliminar
      if (!isNaN(index)) {
          tasks.splice(index, 1); // Eliminar tarea del array
      }
      res.redirect('/'); // Redirigir a la página principal
  });

// Iniciar el servidor
app.listen(8000, () => {
  console.log('Servidor escuchando en el puerto 8000');
});
