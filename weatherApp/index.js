// https://expressjs.com/en/starter/hello-world.html
// #STEPS IN INSTALLING EXPRESS
// mkdir myapp
// cd myapp
// npm init
// add .gitignore
// npm install express


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})