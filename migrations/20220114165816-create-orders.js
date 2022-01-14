/* eslint-disable */

module.exports = {
  up: async (queryInterface, Sequelize) => (
    queryInterface.createTable(
      'Orders',
      {
        clientId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Clients',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          primaryKey: true,
        },

        productId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Products',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          primaryKey: true,
        },

        createdAt: { allowNull: false, type: Sequelize.DATE },
      
        updatedAt: { allowNull: false, type: Sequelize.DATE },
      },
    )
  ),

  down: async (queryInterface, _Sequelize) => queryInterface.dropTable('Orders'),
};
