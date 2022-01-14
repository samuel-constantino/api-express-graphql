module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      name: { type: Sequelize.STRING },

      image: { type: Sequelize.STRING },

      description: { type: Sequelize.STRING },

      weight: { type: Sequelize.FLOAT },

      price: { type: Sequelize.FLOAT },

      quantity: { type: Sequelize.INTEGER },

      createdAt: { allowNull: false, type: Sequelize.DATE },
      
      updatedAt: { allowNull: false, type: Sequelize.DATE },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Products');
  },
};