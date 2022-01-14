const Product = (sequelize, DataType) => {
  const ProductModel = sequelize.define(
    'Product',
    {
      name: DataType.STRING,
      image: DataType.STRING,
      description: DataType.STRING,
      weight: DataType.FLOAT,
      price: DataType.FLOAT,
      quantity: DataType.INTEGER,
    },
  );

  return ProductModel;
};

module.exports = Product;
