var express = require("express");
var router = express.Router();
var userStatus = require("../controller/userStatus");

router.get("/status/", function (req, res, next) {
  res.send("respond from users/status api end point");
});

/**
 * TO get the single user by their username eg.email
 */
router.get("/:username", userStatus.find);

/**
 * To update the userStaus data by filter condition if there is one else create new
 */
router.put("/update", userStatus.update);

module.exports = router;
