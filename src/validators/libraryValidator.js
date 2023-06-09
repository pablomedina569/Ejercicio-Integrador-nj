const { body, validationResult } = require('express-validator');

exports.validateCreateLibrary = [
  body('name').notEmpty().withMessage('Name is required'),
  body('location').notEmpty().withMessage('Location is required'),
  body('telefono').notEmpty().withMessage('Phone number is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
