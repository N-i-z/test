const express = require("express");
const app = express();

// middleware
//app.use(express.json());

app.use(require("./routes/healthCheck"));

const PORT = process.env.PORT || 12345;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
