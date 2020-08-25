var userService = require("../service/userStatus");

/**
 * Function to find userStatus from userStatus collection.
 */
exports.find = function (req, res) {
  var params = req.params || {};
  var query = {
    username: params.username,
  };
  if (!query) {
    res.status(400).send("Bad Request");
    return;
  }
  userService.findUserStatus(query, function (error, response) {
    if (error) {
      res.status(404).send(error);
      return;
    }
    if (response) {
      res.status(200).send(response);
      return;
    }
    if (!response) {
      res.send({ status: "204", data: "No data found" });
    }
  });
};

/**
 * Function to update and create new one if doesnot exist the userStatus data by filter condition.
 */
exports.update = function (req, res) {
  var body = req.body;
  var query = body.query;
  var data = body.data;
  var options = body.options;
  if (!query) {
    res.status(400).send("Bad request");
    return;
  }

  userService.updateUserStatus(query, data, options, (err, response) => {
    if (response) {
      res.status(200).send(response);
    } else if (err) {
      res.status(400).send(err);
    }
  });
};

class UserStatus {
  constructor(userData) {
    this.username = userData.username || "";
    this.Status = userData.Status || "";
  }
}
