const mongoose = require("mongoose");

const requestSchema = mongoose.Schema(
  {
    image1: String,
    image2: String,
    image3: String,
    title: String,
    fd_sort: String,
    fd_name: String,
    raised_money: String,
    want_money: String,
    dayleft: String,
    backers: String,
  },
  {
    versionKey: false,
  }
);

const RequestModel = mongoose.model("request", requestSchema);

module.exports = {
  RequestModel,
};
