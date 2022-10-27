const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const Port = process.env.Port || 5000;
const AllCategories = require("./Data/Catagory.json");

app.get("/catagories", (req, res) => {
    res.send(AllCategories);
  });

  app.get("/catagory/:id", (req, res) => {
    const id = req.params.id;
    const details = AllCategories.find(detail => detail.id == id);
    res.send(details);
  });

  app.listen(Port, () => {
    console.log("server is running", Port);
  });


  module.exports = app;