var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('ps3GET', { message: 'Get Wrecked Trump' });
})

router.post('/', (req, res, next) => {
  // console.log(req.body.message);
  let { message } = req.body;
  let length = message.length
  res.render('ps3POST', { message, length });
})

module.exports = router;