const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
app.use(bodyParser.json());
const userRoute = require("./routes/userRoute");

app.use("/api/users/", userRoute);

let PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
