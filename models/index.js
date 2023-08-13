// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "product_id",
});

// Categories have many Products
Products.hasMany(Product, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
});
// Products belongToMany Tags (through ProductTag)
Products.belongToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },
  //something might need to go here as: 'product_id' maybe?
});

// Tags belongToMany Products (through ProductTag)
Tag.belongToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  //something might need to go here as: 'product_id' maybe?
});

Categories.module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
