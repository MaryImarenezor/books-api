const router = require('express').Router()
const db = require('../models')
const { ObjectId } = require('mongodb');

//the methods used were used with MongoDB 'db.collection' methods. check the MongoDB documentation for more info on the methods: https://www.mongodb.com/docs/v6.2/reference/method/js-collection/ &&&& https://www.mongodb.com/developer/products/mongodb/cheat-sheet/

router.get('/seed', (req, res) => {
    db.Book.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "Wâˆ€RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})


router.get("/", (req, res) => {
    db.Book.find()
    .then((books) => {
        res.json(books)
    })
    .catch((err) => {
        console.log(err)
        res.render('error404')
    })
})

router.get("/:id", (req, res) => {
    const id = req.params.id

    const objectId = new ObjectId(id);

    db.Book.findOne({ _id: objectId })
    .then((books) => {
        res.json(books)
    })
    .catch((err) => {
        console.log(err)
        res.render('error404')
    })
})

router.put("/:id", (req, res) => {
    db.Book.updateOne({ _id: req.params.id }, { $set: req.body})
    .then((books) => {
        res.json(books)
    })
    .catch((err) => {
        console.log(err)
        res.render('error404')
    })
})

router.delete("/:id", (req, res) => {
    db.Book.deleteOne({ _id: req.params.id })
    .then((books) => {
        res.json(books)
    })
    .catch((err) => {
        console.log(err)
        res.render('error404')
    })
})

router.post("/", (req, res) => {
    db.Book.create(req.body)
    .then((books) => {
        res.json(books)
    })
    .catch((err) => {
        console.log(err)
        res.render('error404')
    })
})
module.exports = router