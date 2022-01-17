const clients = [
  {
    id: 1,
    name: 'cliente 1',
    email: 'cliente@um.com',
    cpf: '123.456.789-01',
    birthday: '11/11/2011',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: 'cliente 2',
    email: 'cliente@dois.com',
    cpf: '123.456.789-02',
    birthday: '11/11/2012',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Clients', clients);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Clients', null, {});
  },
};
