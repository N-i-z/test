import express from "express";
import { createMedication } from "../../database/medication.js";

const router = express.Router();

router.post("/medication", function (req, res) {
  const details = {
    name: "name",
    quantity: 100,
  };
  createMedication(details);
});

export default router;

//make function async
