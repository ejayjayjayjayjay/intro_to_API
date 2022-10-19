// https://expressjs.com/en/starter/hello-world.html
// #STEPS IN INSTALLING EXPRESS
// mkdir myapp
// cd myapp
// npm init
// add .gitignore
// npm install express
// 9f7e9e0b314b24c7c6eaf82ebc88862a - API KEY WEATHER APP


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
