var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("userLayout", { title: "Users", dynamicPartial: () => "user" });
});

module.exports = router;
