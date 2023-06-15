const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
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
    // description: String,
    // amount: Number,
    // created_at: Date,
    // till_date: Date,
    // donation_for: {
    //   type: String,
    //   enum: ["Individual", "Group", "Organization"],
    //   required: true,
    // },
    // status: {
    //   type: String,
    //   enum: ["Approved", "Rejected"],
    // },
  },
  {
    versionKey: false,
  }
);

const PostModel = mongoose.model("post", postSchema);

module.exports = {
  PostModel,
};
