const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const axios = require("axios");
const FormData = require("form-data");
const app = express(); 

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// b60e7207359171287020c6b2edfe869d --> Api key
const apiKey = "b60e7207359171287020c6b2edfe869d";


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/html/index.html");
});

app.post("/", (req, res) => {
  const city = req.body.city;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`;

  https.get(url, (response) => {
    if (response.statusCode === 200) {
      response.on("data", (data) => {
        const weatherData = JSON.parse(data);
        const temperature = weatherData.main.temp;
        const description = weatherData.weather[0].description;
        const iconCode = weatherData.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
        
        res.write(`<h1>The temperature in ${city} is: ${temperature}°C.</h1>`);
        res.write(`<p> Description: ${description}</p>`);
        res.write(`<img src="${iconUrl}" alt="Icono del clima">`);
        res.write(`<a href="/">Choose another city</a>`);

        res.send();
      });
    } else {
      res.write(`<h1>Error: we couldn't find ${city} in our files. :( </h1>`);
      res.write(`<a href="/">Choose another city</a>`);  
    }
  });
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
