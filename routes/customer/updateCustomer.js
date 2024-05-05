import express from "express";
import { updateCustomer } from "../../database/customer.js";

const router = express.Router();

router.patch("/customer/:customerId", function (req, res) {
  console.log("params", req.params.customerId);
  console.log("query", req.query);
  console.log("body", req.body);

  // TODO authorize
  res.end();
});

export default router;
