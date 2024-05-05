import express from "express";
import { getMedicationById } from "../../database/medication.js";

const router = express.Router();

router.get("medication/:medicationId", function (req, res) {
  console.log("params", req.params.medicationId);
  // TODO get medication by id from db
  res.send("get med by ID");
});

export default router;
