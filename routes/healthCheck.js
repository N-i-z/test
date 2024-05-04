const express = require("express");
const router = express.Router();

router.get("/healthcheck", function (req, res) {
  res.send("hi");
});

module.exports = router;
