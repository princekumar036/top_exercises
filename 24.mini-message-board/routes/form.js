var express = require('express');
const { route } = require('.');
var router = express.Router();
const messages = require('../public/javascripts/messages')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('form');
});
router.post('/', (req, res, next) => {
    // console.log(route)
    messages.push({
        text: req.body.message,
        user: req.body.user,
        added: new Date()
    })
    res.redirect('/')
})

module.exports = router;
