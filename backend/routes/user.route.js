const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/user.model");

const userRouter = express.Router();

//user register
userRouter.post("/register", async (req, res) => {
  const { name, email, password, mobile } = req.body;
  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User already exist, please login" });
    }
    if (!/[A-Z]/.test(password)) {
      return res.status(400).send("At least one uppercase character");
    }
    if (!/\d/.test(password)) {
      return res.status(400).send("At least one number");
    }
    if (!/[!@#$%^&*()-_=+{}[\]|\\:;\"'<>?,./]/.test(password)) {
      return res.status(400).send("At least a special character");
    }
    if (password.length < 8) {
      return res(400).send(
        "The length of password should be at least 8 characters long"
      );
    }
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      const user = new UserModel({
        name,
        email,
        password: hash,
        mobile,
      });
      await user.save();
      res.status(200).json({ msg: "New user has been added", newUser: user });
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//user login
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          let token = jwt.sign({ userID: user._id, user: user.name }, "TOKEN", {
            expiresIn: "7d",
          });
          res.json({ msg: "User logged in successfully.", token });
        } else {
          res.json({ msg: "Wrong credentials" });
        }
      });
    } else {
      res.json({ msg: "User not found" });
    }
  } catch (err) {
    res.json({ error: err.message });
  }
});

//user logout
userRouter.get("/logout", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  try {
    jwt.verify(token, "TOKEN", (err, decoded) => {
      if (err) {
        return res.status(400).json({ error: "Invalid token." });
      }
      res.status(200).json({ msg: "User has been logged out" });
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = {
  userRouter,
};