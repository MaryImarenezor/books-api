//creating the Schema for the Books Collection
const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String
})




//exporting the schema for usage as 'db.Book' in the "controllers" files
module.exports = mongoose.model('Book', bookSchema)