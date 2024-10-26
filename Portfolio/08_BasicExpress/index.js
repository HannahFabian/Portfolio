const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req,res) =>{
  res.sendFile(__dirname + '/public/html/index.html');
});

app.post('/', (req, res) => {
  var weight = req.body.weight;
  var height = req.body.height;
  res.send("Your BMI is " + ((weight / (height*height))*10000));
});


app.listen(8000, () => {
    console.log("Listening on port 8000");
});
