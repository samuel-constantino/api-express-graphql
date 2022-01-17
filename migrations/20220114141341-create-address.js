module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Addresses', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },

      clientId: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        references: { model: 'Clients', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      street: { type: Sequelize.STRING },

      district: { type: Sequelize.STRING },

      city: { type: Sequelize.STRING },

      state: { type: Sequelize.STRING },

      country: { type: Sequelize.STRING },

      cep: { type: Sequelize.STRING },

      number: { type: Sequelize.STRING },

      createdAt: { allowNull: false, type: Sequelize.DATE },

      updatedAt: { allowNull: false, type: Sequelize.DATE } });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Addresses');
  },
};