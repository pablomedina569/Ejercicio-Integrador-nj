const express = require('express');
const router = express.Router();
const libraryController = require('../controllers/libraryController');
const bookController = require('../controllers/bookController');
const userController = require('../controllers/userController');
const authentication = require('../middleware/authentication');

// Library routes
router.post('/library', authentication.isAuthenticated, libraryController.createLibrary);
router.get('/library/:id', libraryController.getLibrary);
router.get('/library', libraryController.getAllLibraries);
router.put('/library/:id', authentication.isAuthenticated, libraryController.updateLibrary);
router.delete('/library/:id', authentication.isAuthenticated, libraryController.deleteLibrary);
router.post('/library/:id/book', authentication.isAuthenticated, libraryController.addBook);

// Book routes
router.post('/book', authentication.isAuthenticated, bookController.createBook);
router.get('/book/:id', bookController.getBook);
router.get('/book', bookController.getAllBooks);
router.put('/book/:id', authentication.isAuthenticated, bookController.updateBook);
router.delete('/book/:id', authentication.isAuthenticated, bookController.deleteBook);

// User routes
router.post('/login', userController.login);

module.exports = router;
