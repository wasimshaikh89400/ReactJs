var mongoose = require("mongoose");

const Schema = mongoose.Schema;
const userData = new Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  dob: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  mobileNo: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("UserData", userData);
