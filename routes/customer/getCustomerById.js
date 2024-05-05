import express from "express";
import { getCustomerById } from "../../database/customer.js";

const router = express.Router();

router.get("/customer/:customerId", function (req, res) {
  console.log("params", req.params.customerId);
  // TODO get customer by id from db
  res.send("get cus by ID");
});

export default router;
