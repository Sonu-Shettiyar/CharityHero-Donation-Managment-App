const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.route");
const { postRouter } = require("./routes/post.route");
const { requestRouter } = require("./routes/request.route");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/request",requestRouter)

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Server running at port 8181");
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
    console.log("Something went wrong");
  }
});