const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ where: { name: username } })
      .then((user) => {
        if (!user || !user.validPassword(password)) {
          return done(null, false);
        }
        return done(null, user);
      })
      .catch((error) => done(error));
  })
);
