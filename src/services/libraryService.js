const Library = require('../models/Library');
const Book = require('../models/Book');

exports.createLibrary = async (libraryData) => {
  const library = await Library.create(libraryData);
  return library;
};

exports.getLibrary = async (libraryId) => {
  const library = await Library.findOne({
    where: { id: libraryId },
    include: [Book],
  });
  return library;
};

exports.getAllLibraries = async () => {
  const libraries = await Library.findAll();
  return libraries;
};

exports.updateLibrary = async (libraryId, libraryData) => {
  const library = await Library.findOne({ where: { id: libraryId } });
  if (library) {
    await library.update(libraryData);
    return library;
  }
  throw new Error('Library not found');
};

exports.deleteLibrary = async (libraryId) => {
  const library = await Library.findOne({ where: { id: libraryId } });
  if (library) {
    await library.destroy();
    return;
  }
  throw new Error('Library not found');
};

exports.addBook = async (libraryId, bookData) => {
  const library = await Library.findOne({ where: { id: libraryId } });
  if (library) {
    const book = await Book.create(bookData);
    await library.addBook(book);
    return book;
  }
  throw new Error('Library not found');
};
