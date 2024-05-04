import express from "express";

const router = express.Router();

router.get("/ping", function (req, res) {
  res.send("hi");
});

export default router;
