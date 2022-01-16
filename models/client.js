const Client = (sequelize, DataType) => {
  const ClientModel = sequelize.define(
    'Client',
    {
      name: DataType.STRING,
      email: DataType.STRING,
      cpf: DataType.STRING,
      birthday: DataType.STRING,
    },
  );

  ClientModel.associate = ({ Address }) => {
    ClientModel.hasMany(Address, { as: 'addresses' });
  };

  return ClientModel;
};

module.exports = Client;