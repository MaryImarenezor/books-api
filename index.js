// DEPENDENCIES/CONFIGURATION
require('dotenv').config()
const express = require('express')
const cors = require('cors')//CORS OPTIONAL CONFIGURATION
const app = express()

const corsOptions = { //CORS OPTIONAL CONFIGURATION
  origin: 'http://example.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(express.json())
app.use(cors()) //CORS OPTIONAL CONFIGURATION
app.use('/books', require('./controllers/books'))



// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to the Books API!')
})
app.get('/cors', cors(corsOptions), function (req, res, next) { //CORS OPTIONAL CONFIGURATION
  res.json({msg: 'This is CORS-enabled for only example.com.'})
})

// LISTEN
app.listen(process.env.PORT)
app.listen(80, function () { //CORS OPTIONAL CONFIGURATION
  console.log('CORS-enabled web server listening on port 80')
})