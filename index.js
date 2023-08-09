const express = require("express");
const app = require("./app.js"); // Import the Express application from app.js
const mongoose = require("mongoose");
const dotenv = require("dotenv"); // Import dotenv for managing environment variables


// Configure environment variables
dotenv.config();

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE using the URL from environment variables
const DATABASE_URL =  process.env.DATABASE_URI;
 

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true, // Use new URL parser
  useUnifiedTopology: true, // Use new unified topology engine
});
const db = mongoose.connection;

// Event listener for database connection error
db.on("error", (err) => console.log(err));

// Event listener for successful database connection
db.once("open", () => console.log("connected to database"));

// Start Server
const port = process.env.PORT || 3000; // Use environment variable or default to port 3000
app.listen(port, () => console.log(`App listening on port ${port}!`));


