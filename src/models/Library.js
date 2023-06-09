const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');
const Book = require('./Book');

const Library = sequelize.define('Library', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Library.hasMany(Book, { foreignKey: 'libraryId' });

module.exports = Library;
