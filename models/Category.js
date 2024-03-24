//imports sequelize and creates a new class that serves as the sequelize model for the data
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
//category is an extension if the model, and inherits its methods, like 'init'
class Category extends Model {}

Category.init(
  {
    // define columns: column name contains the properties/data types of the column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
