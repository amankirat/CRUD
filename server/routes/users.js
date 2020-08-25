var express = require("express");
var router = express.Router();
var user = require("../controller/user");

router.get("/", function (req, res, next) {
  res.send("respond from users api end point");
});

/**
 * TO get the single user by their username eg.email
 */
router.get("/user/:username", user.find);
/**
 * To update the user data by filter condition
 */
router.put("/update", user.update);

/**
 * To delete the user by condition
 */
router.delete("/delete", user.delete);

module.exports = router;
