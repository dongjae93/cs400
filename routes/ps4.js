const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res, next) => {
  axios.get('http://www.jservice.io/api/random')
  .then(response => {
    let { data } = response;
    let { category, question, answer, value } = data[0];
    let { title } = category;
    res.render('ps4GET', { title, question, answer, value })
  })
})

router.post('/', (req, res, next) => {
  // console.log(req.body.message);
  let { message } = req.body;
  let length = message.length
  res.render('ps3POST', { message, length });
})

module.exports = router;