const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
const session = require("express-session");
require("./services/passport");

mongoose.connect(keys.connect_url);

const app = express();

app.use(
  session({
    secret: "keyboard cat",
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 },
  })
);

app.use(passport.initialize());
app.use(session({ secret: "my super secret" }));

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
