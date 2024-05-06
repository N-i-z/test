import db from "./database.js";

// details is an object with properties: name, email
export async function createCustomer(details) {
  const statement = db.prepare(
    "INSERT INTO customer (name, email) VALUES (@name, @email)"
  );
  const result = statement.run(details);
  console.log("result", result);
  const id = result.lastInsertRowid;
  return id;
}

export async function deleteCustomer(id) {
  // TODO delete customer
  // TODO sql table operations
}

export async function updateCustomer(id, details) {
  // TODO update customer
  // TODO sql table operations
}

export async function getAllCustomer() {
  // TODO get all customers
  // TODO sql table operations
}

export async function getCustomerById(id) {
  // TODO get all customers
  // TODO sql table operations
}
