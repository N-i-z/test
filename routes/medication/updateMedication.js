import express from "express";
import { updateMedication } from "../../database/medication.js";

const router = express.Router();

router.patch("/medication/:medicationId", function (req, res) {
  console.log("params", req.params.medicationId);
  console.log("query", req.query);
  console.log("body", req.body);

  // TODO authorize
  res.end();
});

export default router;
