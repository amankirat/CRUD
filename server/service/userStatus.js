(function () {
  var mongoose = require("mongoose");
  var userStatus = mongoose.model("UserStatus");

  /**
   * Funtion to find the user from collections.
   * @param {*} query condition or expression to find the user from collection.
   * @param {*} callback callback function
   */
  exports.findUserStatus = function (query, callback) {
    userStatus.findOne(query, callback);
  };

  /**
   * Function to execute the update query and create new one if does not exist.
   * @param {*} query Condition or filter to find the user.
   * @param {*} data data which we need to update.
   * @param {*} options
   */
  exports.updateUserStatus = function (query, data, options, callback) {
    userStatus.findOneAndUpdate(
      query,
      data,
      { upsert: true, new: true },
      (err, response) => {
        callback(err, response);
      }
    );
  };
})();
