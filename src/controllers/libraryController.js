const Library = require('../models/Library');
const Book = require('../models/Book');
const libraryService = require('../services/libraryService');

exports.createLibrary = async (req, res) => {
  try {
    const library = await libraryService.createLibrary(req.body);
    res.status(201).json(library);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getLibrary = async (req, res) => {
  try {
    const library = await libraryService.getLibrary(req.params.id);
    res.json(library);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllLibraries = async (req, res) => {
  try {
    const libraries = await libraryService.getAllLibraries();
    res.json(libraries);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateLibrary = async (req, res) => {
  try {
    const library = await libraryService.updateLibrary(req.params.id, req.body);
    res.json(library);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteLibrary = async (req, res) => {
  try {
    await libraryService.deleteLibrary(req.params.id);
    res.json({ message: 'Library deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.addBook = async (req, res) => {
  try {
    const book = await libraryService.addBook(req.params.id, req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
