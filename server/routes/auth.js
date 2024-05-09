const express = require("express");
const router = express.Router();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "https://www.example.com/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      UserActivation.findOrCreate(
        { googleId: profile.id },
        function (err, user) {
          return cb(err, user);
        }
      );
    }
  )
);

module.exports = router;