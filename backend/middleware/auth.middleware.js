const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    try {
      const decoded = jwt.verify(token, "TOKEN");
      if (decoded) {
        req.body.userId = decoded.userID;
        req.body.user = decoded.name;
        next();
      } else {
        res.json({ msg: "Not recognised" });
      }
    } catch (err) {
      res.json({ error: err.message });
    }
  }
};

module.exports = {
  auth,
};
