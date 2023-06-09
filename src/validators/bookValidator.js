const { body, validationResult } = require('express-validator');

exports.validateCreateBook = [
  body('isbn').notEmpty().withMessage('ISBN is required'),
  body('titulo').notEmpty().withMessage('Title is required'),
  body('autor').notEmpty().withMessage('Author is required'),
  body('year').notEmpty().withMessage('Year is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
