import express from "express";

const router = express.Router();

router.post("/customer", function (req, res) {
  console.log("params", req.params);
  console.log("query", req.query);
  console.log("body", req.body);
  // TODO create customer in db
  const customer = { id: "123", name: "fvafv" };
  res.send(customer);
});

export default router;
