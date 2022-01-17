const adresses = [
  {
    id: 1,
    clientId: 1,
    street: 'Rua 1',
    district: 'Bairro 1',
    city: 'Cidade 1',
    state: 'Estado 1',
    country: 'País 1',
    cep: '12345-678',
    number: '121',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    clientId: 2,
    street: 'Rua 2',
    district: 'Bairro 2',
    city: 'Cidade 2',
    state: 'Estado 2',
    country: 'País 2',
    cep: '22345-678',
    number: '222',
    createdAt: new Date(),
    updatedAt: new Date(),
  },

];

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Addresses', adresses);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Addresses', null, {});
  },
};
