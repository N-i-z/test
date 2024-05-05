import express from "express";

const router = express.Router();

router.delete("/customer/:customerId", function (req, res) {
  console.log("params", req.params.customerId);
  console.log("query", req.query.permanent);
  // TODO delete customer from DB
  // TODO authorize
  res.end();
});

export default router;
