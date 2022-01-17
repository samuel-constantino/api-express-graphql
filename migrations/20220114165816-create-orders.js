/* eslint-disable */

module.exports = {
  up: async (queryInterface, Sequelize) => (
    queryInterface.createTable(
      'Orders',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },

        clientId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Clients',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },

        productId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Products',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },

        createdAt: { allowNull: false, type: Sequelize.DATE },
      
        updatedAt: { allowNull: false, type: Sequelize.DATE },
      },
    )
  ),

  down: async (queryInterface, _Sequelize) => queryInterface.dropTable('Orders'),
};
