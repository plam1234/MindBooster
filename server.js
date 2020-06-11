const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");

const passport = require("./routes/passport/setup");
const auth = require("./routes/auth");

const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 5000;
const MONGO_URI = "mongodb://127.0.0.1:27017/user_database";

// Connect to the Mongo DB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })
  .then(console.log(`MongoDB Connected ${MONGO_URI}`))
  .catch((err) => console.log(err));

// Define middleware here
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Express Session
app.use(
  session({
    secret: "This is very super secret",
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
app.use("/api/auth", auth);
app.get("/", (req, res) => res.send("Good Evening Beautiful!"));

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> Backend API Server now listening on PORT ${PORT}!`);
});
