const express = require('express');
const router = express.Router();
const axios = require('axios');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/jeopardy', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("db connection success!")
});

const jeopardySchema = new mongoose.Schema({
  id: String,
  title: String,
  question: String,
  answer: String,
  value: Number
})

const Jeopardy = mongoose.model('Jeopardy', jeopardySchema);

router.get('/:id', (req, res, next) => {

  let { id } = req.params;

  Jeopardy.findOne({ id }, (err, result) => {
    if(err) {
      console.log(err);
      
    } else {
      if(!result) {
        axios.get(`http://www.jservice.io/api/category?id=${id}`)
        .then(response => {
          let { data } = response;
          let { title } = data;
          console.log('title:', title)
          let { question, answer, value } = data.clues[0];
          return Jeopardy.create({ id, title, question, answer, value})
        })
        .then(result => {
          res.render('ps6GET', { title: result.title, question: result.question, answer: result.answer, value: result.value, method: 'API call' })
        })
      } else {
        res.render('ps6GET', { title: result.title, question: result.question, answer: result.answer, value: result.value, method: "From DB"})
      }
    }
  })
  
})

router.post('/', (req, res, next) => {
  // console.log(req.body.message);
  let { message } = req.body;
  let length = message.length
  res.render('ps3POST', { message, length });
})

module.exports = router;