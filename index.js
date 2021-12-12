const express = require("express");
const cors = require("cors");
const contactRouter = require("./routes/contact");

require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/contact", contactRouter);

const port = process.env.PORT || 5001;
app.listen(port, console.log("App is running"));