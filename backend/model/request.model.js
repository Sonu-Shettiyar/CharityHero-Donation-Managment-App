const mongoose = require("mongoose");

const requestSchema = mongoose.Schema(
  {
    image1: String,
    image2: String,
    image3: String,
    title: String,
    fd_sort: String,
    fd_name: String,
    raise_money: Number,
    want_money: Number,
    days_left: Number,
    backers: Number,
    category: String,
    image: String,
    location: String,
    userID: String,
    name: String,
    description :String
  },
  {
    versionKey: false,
  }
);

const RequestModel = mongoose.model("request", requestSchema);

module.exports = {
  RequestModel,
};
