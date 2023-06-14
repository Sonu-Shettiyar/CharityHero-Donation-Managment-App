const express = require("express");
const { auth } = require("../middleware/auth.middleware");
const { PostModel } = require("../model/post.model");

const postRouter = express.Router();

// postRouter.use(auth);

//add a post
postRouter.post("/add", async (req, res) => {
  try {
    const note = new PostModel(req.body);
    await note.save();
    res.json({ msg: "New post has been added", post: req.body });
  } catch (err) {
    res.json({ error: err.message });
  }
});

module.exports = {
  postRouter,
};