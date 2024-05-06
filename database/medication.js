import db from "./database.js";

export async function createMedication(details) {
  const statement = db.prepare(
    "INSERT INTO medication (name, quantity) VALUES (@name, @quantity)"
  );
  const result = statement.run(details);
  console.log("result", result);
  const id = result.lastInsertRowid;
  return id;
}

export async function deleteMedication(id) {
  // TODO delete medication
  // TODO sql table operations
}

export async function updateMedication(id, details) {
  // TODO update medication
  // TODO sql table operations
}

export async function getAllMedication() {
  // TODO get all customers
  // TODO sql table operations
}

export async function getMedicationById(id) {
  // TODO get all customers
  // TODO sql table operations
}
