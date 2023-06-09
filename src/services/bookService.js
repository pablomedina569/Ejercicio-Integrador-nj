const Book = require('../models/Book');

exports.createBook = async (bookData) => {
  const book = await Book.create(bookData);
  return book;
};

exports.getBook = async (bookId) => {
  const book = await Book.findOne({ where: { id: bookId } });
  return book;
};

exports.getAllBooks = async () => {
  const books = await Book.findAll();
  return books;
};

exports.updateBook = async (bookId, bookData) => {
  const book = await Book.findOne({ where: { id: bookId } });
  if (book) {
    await book.update(bookData);
    return book;
  }
  throw new Error('Book not found');
};

exports.deleteBook = async (bookId) => {
  const book = await Book.findOne({ where: { id: bookId } });
  if (book) {
    await book.destroy();
    return;
  }
  throw new Error('Book not found');
};
