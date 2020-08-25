(function () {
  var mongoose = require("mongoose");
  var user = mongoose.model("User");

  /**
   * Funtion to find the user from collections.
   * @param {*} query condition or expression to find the user from collection.
   * @param {*} callback callback function
   */
  exports.findUser = function (query, callback) {
    user.findOne(query, callback);
  };

  /**
   * Function to execute the update query and create new one if does not exist.
   * @param {*} query Condition or filter to find the user.
   * @param {*} data data which we need to update.
   * @param {*} options
   */
  exports.updateUser = function (query, data, options, callback) {
    user.findOneAndUpdate(
      query,
      data,
      { upsert: true, new: true },
      (err, response) => {
        callback(err, response);
      }
    );
  };

  exports.deleteUser = function (query, callback) {
    user.deleteOne(query, callback);
  };
})();
