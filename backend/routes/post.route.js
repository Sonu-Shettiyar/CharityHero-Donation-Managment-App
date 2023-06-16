const express = require("express");
const { auth } = require("../middleware/auth.middleware");
const { PostModel } = require("../model/post.model");

const postRouter = express.Router();

postRouter.use(auth);

//add a post
postRouter.post("/add", async (req, res) => {
  try {
    const post = new PostModel(req.body);
    await post.save();
    res.json({ msg: "New post has been added", post: req.body });
  } catch (err) {
    res.json({ error: err.message });
  }
});

//get the post
postRouter.get("/", async (req, res) => {
  try {
    const posts = await PostModel.find({ userID: req.body.userID });
    res.send(posts);
  } catch (err) {
    res.json({ error: err.message });
  }
});

//update
postRouter.patch("/update/:postID", async (req, res) => {
  const userIDinUserDoc = req.body.userID;
  const { postID } = req.params;
  try {
    const post = await PostModel.findOne({ _id: postID });
    const userIDinPostDoc = post.userID;
    if (userIDinUserDoc == userIDinPostDoc) {
      await PostModel.findByIdAndUpdate({ _id: postID }, req.body);
      res.json({ msg: `${post.title} has been updated` });
    } else {
      res.json({ msg: "Not Authorized!!" });
    }
  } catch (err) {
    res.json({ error: err });
  }
});

//delete
postRouter.delete("/delete/:postID", async (req, res) => {
  const userIDinUserDoc = req.body.userID;
  const { postID } = req.params;
  try {
    const post = await PostModel.findOne({ _id: postID });
    const userIDinPostDoc = post.userID;
    if (userIDinUserDoc == userIDinPostDoc) {
      await PostModel.findByIdAndDelete({ _id: postID }, req.body);
      res.json({ msg: `${post.title} has been deleted` });
    } else {
      res.json({ msg: "Not Authorized!!" });
    }
  } catch (err) {
    res.json({ error: err });
  }
});

module.exports = {
  postRouter,
};
