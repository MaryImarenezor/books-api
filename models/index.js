//connecting the MongoDB database to the API
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})


//be sure to require the schema so it can operate properly
module.exports.Book = require('./books')


