
/* GET projects page. */
var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("Projects", { title: "Projects" });
});

module.exports = router;
