import express from "express";
import { getAllMedication } from "../../database/medication.js";

const router = express.Router();

router.get("/medication", function (req, res) {
  console.log("params", req.params);
  // TODO retrieve medication from db
  res.send(db.medication);
});

export default router;
