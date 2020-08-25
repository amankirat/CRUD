var mongoose = require("mongoose");

var schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  Status: {
    type: String,
    default: "Initial",
  },
});

var userStatus = new mongoose.model("UserStatus", schema);

module.exports = userStatus;
