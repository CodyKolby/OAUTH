const passport = require("passport");
const session = require("express-session");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (req, res) => {
    req.logout(function (err) {
      if (err) {
        return res.send("error");
      } else {
        res.send("success");
      }
    });
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.session.passport);
  });
};
