import express from "express";
import { deleteMedication } from "../../database/medication.js";

const router = express.Router();

router.delete("/medication/:medicationId", function (req, res) {
  console.log("params", req.params.medicationId);
  console.log("query", req.query.permanent);
  // TODO delete medication from DB
  // TODO authorize
  res.end();
});

export default router;
