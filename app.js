import express from "express";
import ping from "./routes/ping.js";
import deleteCustomer from "./routes/customer/deleteCustomer.js";
import createCustomer from "./routes/customer/createCustomer.js";
import updateCustomer from "./routes/customer/updateCustomer.js";
import getAllCustomer from "./routes/customer/getAllCustomer.js";
import getCustomerById from "./routes/customer/getCustomerById.js";
import createMedication from "./routes/medication/createMedication.js";
import updateMedication from "./routes/medication/updateMedication.js";
import deleteMedication from "./routes/medication/deleteMedication.js";
import getAllMedication from "./routes/medication/getAllMedication.js";
import getMedicationById from "./routes/medication/getMedicationById.js";

const app = express();

// middleware
app.use(express.json());

app.use(ping);
app.use(deleteCustomer);
app.use(createCustomer);
app.use(updateCustomer);
app.use(getAllCustomer);
app.use(getCustomerById);
app.use(createMedication);
app.use(updateMedication);
app.use(deleteMedication);
app.use(getAllMedication);
app.use(getMedicationById);

const PORT = process.env.PORT || 12345;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
