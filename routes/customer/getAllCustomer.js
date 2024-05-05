import express from "express";
import { getAllCustomer } from "../../database/customer.js";

const router = express.Router();

router.get("/customer", function (req, res) {
  console.log("params", req.params);
  // TODO retrieve customers from db
  res.send("customer");
});

export default router;
