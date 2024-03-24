// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Product belongsTo Category: categories have many Products but products belong to a single Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

//Categories have many Products
//onDelete: 'CASCADE' means that if the parent Category is deleted, the  products referencing that category will also be deleted
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
// Product belongToMany Tag (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});
// Tag belongToMany Product (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
