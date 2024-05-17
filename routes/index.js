var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index.html');
});

router.get("/hello", (req, res) => {

  res.send("Hello " + " World!");
});
module.exports = router;
