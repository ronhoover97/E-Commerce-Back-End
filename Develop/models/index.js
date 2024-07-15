const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

Product.belongsTo(Category, {
  foreignKey: "category_id",
});

Product.hasMany(Category, {
  foreginKey: "category_id",
});

Product.belongsTo(Tag, {
  through: ProductTag,
  as: "productTag_tag",
  foreignKey: "product_id",
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  as: "productTag_product",
  foreginKey: "tag_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
