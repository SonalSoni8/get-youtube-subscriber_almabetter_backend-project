const express = require("express");
const path = require("path");
const Subscribers = require("./src/models/subscribers"); // Import the Subscribers model
const app = express();

// Routes
// API to render HTML file - METHOD: GET
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// API to get all data - METHOD: GET
app.get("/subscribers", async (req, res) => {
  try {
    let subscribers = await Subscribers.find();
    res.status(200).send(subscribers);
  } catch (error) {
    res.status(500).send(); // Sending a response without a message, consider sending an error message for debugging
  }
});

// API to get all subscribers by name and subscribed channel - METHOD: GET
app.get("/subscribers/names", async (req, res) => {
  try {
    let subscribers = await Subscribers.find({}).select("name subscribedChannel");
    res.status(200).send(subscribers);
  } catch (error) {
    res.status(500).send(); // Sending a response without a message, consider sending an error message for debugging
  }
});

// API to get subscribers by ID - METHOD: GET
app.get("/subscribers/:id", async (req, res) => {
  try {
    let subscriber = await Subscribers.findById(req.params.id);
    if (!subscriber) {
      res.status(404).send({
        message: "Subscriber not found",
        note: "Make sure to enter a correct Subscriber's ID to get the details"
      });
      return;
    }
    res.status(200).send(subscriber);
  } catch (error) {
    res.status(400).send({
      message: error.message,
      note: "Instaed of '/:id' or anything else, Enter the Correct Subscriber's ID to get the Subscriber's details"
    });
  }
});

module.exports = app;
