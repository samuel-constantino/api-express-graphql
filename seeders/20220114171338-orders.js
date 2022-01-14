const orders = [
  {
    clientId: 1,
    productId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    clientId: 2,
    productId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Orders', orders);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Orders', null, {});
  },
};
