import express from "express";
import ping from "./routes/ping.js";
import deleteCustomer from "./routes/customer/deleteCustomer.js";
import createCustomer from "./routes/customer/createCustomer.js";

const app = express();

// middleware
app.use(express.json());

app.use(ping);
app.use(deleteCustomer);
app.use(createCustomer);

const PORT = process.env.PORT || 12345;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
