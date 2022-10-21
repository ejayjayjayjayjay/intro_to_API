// https://expressjs.com/en/starter/hello-world.html
// #STEPS IN INSTALLING EXPRESS
// mkdir myapp
// cd myapp
// npm init
// add .gitignore
// npm install express
// 9f7e9e0b314b24c7c6eaf82ebc88862a - API KEY WEATHER APP


const express = require('express')
const https = require('node:https');

const app = express()
const port = 3000



app.get('/', (req, res) => {
  const url = "https://api.openweathermap.org/data/2.5/weather?q=manila&units=metric&appid=9f7e9e0b314b24c7c6eaf82ebc88862a";
  https.get(url, function(response){
    console.log(response);
  });
  res.send('Server is running') 
})

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})

