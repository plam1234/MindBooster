const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/passport/userRoutes");

const app = express();

const PORT = process.env.PORT || 3001;
const MONGO_URI = "mongodb://127.0.0.1:27017/users";

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to the Mongo DB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

// Define middleware here
app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎==> Backend API Server now listening on PORT ${PORT}!`);
});
