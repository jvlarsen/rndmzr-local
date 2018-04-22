var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{id: 1, name: "Tarzan"},
            {id: 2, name: "Faccio"},
            {id: 3, name: "Nosser"},
            {id: 4, name: "Trusser"}]);
  //res.send('My backend wrote this'); // this sends plain string to be displayed.
})
.patch('/{participant}', function(res, req) {
  console.log('My PUT works!');
});


module.exports = router;
