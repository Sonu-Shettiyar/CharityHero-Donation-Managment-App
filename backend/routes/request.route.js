const express = require("express");
const { auth } = require("../middleware/auth.middleware");
const { RequestModel } = require("../model/request.model");

const requestRouter = express.Router();

requestRouter.use(auth);

//add a post
requestRouter.post("/add", async (req, res) => {
  try {
    const post = new RequestModel(req.body);
    await post.save();
    res.json({ msg: "New post has been added", post: req.body });
  } catch (err) {
    res.json({ error: err.message });
  }
});

//get the post
requestRouter.get("/", async (req, res) => {
  try {
    const posts = await RequestModel.find({ userID: req.body.userID });
    res.send(posts);
  } catch (err) {
    res.json({ error: err.message });
  }
});

//update
requestRouter.patch("/update/:requestID", async (req, res) => {
  const userIDinUserDoc = req.body.userID;
  const { requestID } = req.params;
  try {
    const request = await RequestModel.findOne({ _id: requestID });
    const userIDinPostDoc = request.userID;
    if (userIDinUserDoc == userIDinPostDoc) {
      await RequestModel.findByIdAndUpdate({ _id: requestID }, req.body);
      res.json({ msg: `${request.title} has been updated` });
    } else {
      res.json({ msg: "Not Authorized!!" });
    }
  } catch (err) {
    res.json({ error: err });
  }
});

//delete
requestRouter.delete("/delete/:requestID", async (req, res) => {
  const userIDinUserDoc = req.body.userID;
  const { requestID } = req.params;
  try {
    const request = await RequestModel.findOne({ _id: requestID });
    const userIDinPostDoc = request.userID;
    if (userIDinUserDoc == userIDinPostDoc) {
      await RequestModel.findByIdAndDelete({ _id: requestID }, req.body);
      res.json({ msg: `${request.title} has been deleted` });
    } else {
      res.json({ msg: "Not Authorized!!" });
    }
  } catch (err) {
    res.json({ error: err });
  }
});

module.exports = {
  requestRouter,
};
