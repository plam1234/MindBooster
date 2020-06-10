const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");

const passport = require("./routes/passport/setup");
const auth = require("./routes/auth");

const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 5000;
const MONGODB_URI = "mongodb://127.0.0.1:27017/tutorial_social_login";

// Connecting to Mongo DB
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(console.log(`MongoDB connected ${MONGODB_URI}`))
  .catch((err) => console.log(err));

// Define middleware here
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Express Session
app.use(
  session({
    secret: "Very Super Secret",
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);
app.use("/api/auth", auth);
app.get("/", (req, res) => res.send("Hello There!"));

app.listen(PORT, () => console.log(`Backend Listening on port ${PORT}!`));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// // Start the API server
// app.listen(PORT, function () {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
