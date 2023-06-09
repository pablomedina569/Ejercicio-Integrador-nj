const passport = require('passport');

exports.login = (req, res, next) => {
  passport.authenticate('local', (error, user) => {
    if (error || !user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }
    req.login(user, { session: false }, (error) => {
      if (error) {
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.json({ message: 'Login successful' });
      }
    });
  })(req, res, next);
};

