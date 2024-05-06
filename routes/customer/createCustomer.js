import express from "express";
import { createCustomer } from "../../database/customer.js";

const router = express.Router();

router.post("/customer", function (req, res) {
  const details = {
    name: "name",
    email: "email",
  };
  createCustomer(details);
});

export default router;
