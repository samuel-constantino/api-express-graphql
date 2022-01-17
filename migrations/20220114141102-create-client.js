module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      name: { type: Sequelize.STRING },

      email: { type: Sequelize.STRING },

      cpf: { type: Sequelize.STRING },

      birthday: { type: Sequelize.STRING },

      createdAt: { allowNull: false, type: Sequelize.DATE },

      updatedAt: { allowNull: false, type: Sequelize.DATE },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Clients');
  },
};