import express from "express";

const router = express.Router();

/*
 * eg: localhost:12345/customer/123?permanent=true (true for permanent)
 * localhost:12345/customer/123 for soft delete
 */
router.delete("/customer/:customerId", function (req, res) {
  console.log("params", req.params.customerId);
  console.log("query", req.query.permanent);
  // TODO delete customer from DB
  // TODO authorize
  res.end();
});

export default router;
