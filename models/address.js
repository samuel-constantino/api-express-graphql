const Address = (sequelize, DataType) => {
  const AddressModel = sequelize.define(
    'Address',
    {
      street: DataType.STRING,
      district: DataType.STRING,
      city: DataType.STRING,
      state: DataType.STRING,
      country: DataType.STRING,
      cep: DataType.STRING,
      number: DataType.STRING,
    },
  );

  AddressModel.associate = (models) => {
    AddressModel.belongsTo(models.Client, { foreignKey: 'clientId', as: 'client' });
  };

  return AddressModel;
};

module.exports = Address;