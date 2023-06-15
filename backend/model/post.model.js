const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    amount: Number,
    created_at: Date,
    till_date: Date,
    donation_for: {
      type: String,
      enum: ["Individual", "Group", "Organization"],
      required: true,
    },
    status: {
      type: String,
      enum: ["Approved", "Rejected"],
    }
  },
  {
    versionKey: false,
  }
);

const PostModel = mongoose.model("posts", postSchema);

module.exports = {
  PostModel,
};
