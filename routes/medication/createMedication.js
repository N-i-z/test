import express from "express";
import { createMedication } from "../../database/medication.js";

const router = express.Router();

router.post("/medication", function (req, res) {
  console.log("params", req.params);
  console.log("query", req.query);
  console.log("body", req.body);
  // TODO create medication in db
  const medication = { id: "12", name: "dvava" };
  res.send(medication);
});

export default router;

//make function async
