const Order = (sequelize, _DataTypes) => {
    const OrderModel = sequelize.define('Order', {}, {});

    OrderModel.associate = (models) => {
        models.Client.belongsToMany(models.Product, {
                as: 'products',
                through: OrderModel,
                foreignKey: 'clientId',
                otherKey: 'productId',
            });
        models.Product.belongsToMany(models.Client, {
                as: 'products',
                through: OrderModel,
                foreignKey: 'productId',
                otherKey: 'clientId',
            });
    };

    return OrderModel;
};

module.exports = Order;
