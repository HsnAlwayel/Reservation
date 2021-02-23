const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db/models");

//Routes
const eventRoutes = require("./routes/events");
//Express instance
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/events", eventRoutes);
const run = async () => {
  try {
    await db.sequelize.sync();
    console.log("Connection to the database successful!");
    await app.listen(8000, () => {
      console.log("The application is running on localhost:8000");
    });
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
};

run();
