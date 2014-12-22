var express = require('express');
var router = express.Router();
var db = require("../lib/modules/db")
var _ = require("underscore")

/* GET users listing. */
router.get('/', function(req, res) {

    var checkString = ""
    var and = false

    if (!_.isEmpty(req.query)) {
        checkString = " where "

        if (req.query.lastname) {
            checkString += "`lastname`='" + req.query.lastname + "' "
            and = true
        }
        if (req.query.firstletter) {
            if (and) {
                checkString += "and "
            }
            checkString += "LEFT(`firstname`,1) like '" + req.query.firstletter + "' ";
            and = true
        }
    }

    console.log('select * from Players' + checkString)

    db.query('select * from Players' + checkString, function(err, rows, fields) {
      if (err) throw err;
      res.json(rows);
    });
});

module.exports = router;
