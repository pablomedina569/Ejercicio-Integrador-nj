const passport = require('passport');

exports.isAuthenticated = (req, res, next) => {
  passport.authenticate('local', { session: false }, (error, user) => {
    if (error || !user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }
    req.user = user;
    next();
  })(req, res, next);
};
