const express = require("express");

const mongoose = require("mongoose");

require('dotenv').config()

const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/adminRoute')

app.use(bodyParser.json())


app.use('/admin', adminRoutes);


const PORT = process.env.port || 5000;

app.listen(PORT, async () => {
  console.log("server listening on port " + PORT);
  try {
    db = await mongoose.connect(process.env.mongoDB_connection_string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to the  database");
  } catch (err) {
    throw err;
  }
});