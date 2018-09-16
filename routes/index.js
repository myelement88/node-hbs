var express = require("express");
var router = express.Router();

// GET home page
router.get("/", function(req, res, next) {
  res.render("index", { title: "myEapp", condition: false });
});

// get users listing
router.get("/users", function(req, res, next) {
  res.send("Respond with a resource");
});

router.get("/users/detail", function name(req, res, next) {
  res.send("detail");
});

module.exports = router;
