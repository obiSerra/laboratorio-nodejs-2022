const express = require("express");
const router = express.Router();

const db = require("../src/db");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const users = await db.getAllUsers();
  res.render("localuserLayout", { title: "Users", users, dynamicPartial: () => "localusers" });
});

// router.get("/:id", async function (req, res, next) {
//   const { id } = req.params;
//   const userData = await loadUserById(id);
//   console.log(userData);
//   res.render("userLayout", { title: "Users", user: userData, dynamicPartial: () => "user" });
// });
module.exports = router;
