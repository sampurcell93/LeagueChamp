var express = require('express');
var router = express.Router();
var db = require("../lib/modules/db")

/* GET users listing. */
router.get('/', function(req, res) {
    db.query('select * from Plays limit 10', function(err, rows, fields) {
      if (err) throw err;
      res.json(rows);
    });
});

module.exports = router;
