var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("user", { title: "User" });
});
router.get("/list", function (req, res, next) {
  const users = ["user1", "user2"];
  res.render("users", { title: "User", users: users });
});

module.exports = router;
