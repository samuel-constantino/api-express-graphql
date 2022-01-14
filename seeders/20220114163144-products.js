const products = [
  {
    id: 1,
    name: 'Produto 1',
    image: 'URL image 1',
    description: 'Descrição 1',
    weight: 1.0,
    price: 10.50,
    quantity: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: 'Produto 2',
    image: 'URL image 2',
    description: 'Descrição 2',
    weight: 2.0,
    price: 20.50,
    quantity: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Products', products);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
