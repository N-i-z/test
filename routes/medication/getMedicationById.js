import express from "express";
import { getMedicationById } from "../../database/medication.js";

const router = express.Router();

router.get("/medication/:medicationId", async (req, res) => {
  const medicationId = req.params.medicationId;

  try {
    const medication = await getMedicationById(medicationId);
    if (medication) {
      res.json({ medication });
    } else {
      res.status(404).json({ error: "Medication not found" });
    }
  } catch (error) {
    console.error("Error retrieving medication:", error);
    res.status(500).json({ error: "Error retrieving medication" });
  }
});

export default router;
