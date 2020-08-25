var express = require("express");
var router = express.Router();

/* GET userStatus listing. */
router.get("/", function (req, res, next) {
  res.send("respond from api/user API");
});

module.exports = router;
