var userService = require("../service/user");

/**
 * Function to find user from user collection.
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
  userService.findUser(query, function (error, response) {
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
 * Function to update and create new one if doesnot exist, the user data by filter condition.
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

  userService.updateUser(query, data, options, (err, response) => {
    if (response) {
      res.status(200).send(response);
    } else if (err) {
      res.status(400).send(err);
    }
  });
};

/**
 * Function to delete the user from collection.
 */
exports.delete = function (req, res) {
  var body = req.body || {};
  var query = body.query;
  if (!query) {
    res.status(400).send("Bad Request");
    return;
  }
  userService.deleteUser(query, function (error, response) {
    if (error) {
      res.status(400).send(error);
      return;
    }
    if (response) {
      if (response.n === 1 && response.ok === 1) {
        res.status(202).send(body);
      }
      if (response.n === 0 && response.ok === 1) {
        res.status(204).send({
          message: "No data found",
        });
      }
    }
  });
};

class User {
  constructor(userData) {
    this.username = userData.username || "";
    this.firstName = userData.firstName || "";
    this.lastName = userData.lastName || "";
    this.phone = userData.phone || "";
    this.Email = userData.Email || "";
    this.JobTitle = userData.JobTitle || "";
    this.MobilePhone = userData.MobilePhone || "";
    this.Picture = userData.Picture || "";
  }
}
