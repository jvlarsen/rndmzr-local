var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json([{Id:1, Name:'Goal', Type:'Other3'},
                  {Id:2, Name:'Free kick committed', Type:'Own1'},
                  {Id:3, Name:'Yellow card', Type:'Own2'},
                  {Id:4, Name:'Shot on target', Type:'Other1'},
                  {Id:5, Name:'Assist', Type:'Other2'},
                  {Id:6, Name:'Medic', Type:'Own1'},
                  {Id:7, Name:'Offside', Type:'Own1'}]);
});

module.exports = router;
