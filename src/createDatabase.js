// Import required modules
const mongoose = require("mongoose");
const subscriberModel = require("./models/subscribers"); // Import the subscriber model
const data = require("./data"); // Import data for populating the database
const dotenv = require("dotenv"); // Import dotenv for managing environment variables

// Load environment variables from .env file
dotenv.config();

// Configuration of environment

// Connect to DATABASE using the URL from environment variables
const DATABASE_URL = process.env.DATABASE_URI;
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true, // Use new URL parser
  useUnifiedTopology: true, // Use new unified topology engine
});
const db = mongoose.connection;

// Event listener for database connection error
db.on("error", (err) => console.log(err));

// Event listener for successful database connection
db.once("open", () => console.log("Database created..."));

// Define an async function to refresh the database with new data
const refreshAll = async () => {
  // Delete all existing documents from the subscriberModel collection
  await subscriberModel.deleteMany({});
  
  // Insert new data (subscribers) into the subscriberModel collection
  await subscriberModel.insertMany(data);

  // Disconnect from the MongoDB database
  await mongoose.disconnect();
};

// Call the refreshAll function to populate the database with new data
refreshAll();
