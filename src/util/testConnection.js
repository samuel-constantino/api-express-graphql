const models = require('../../models');

const formatMessage = (message) => {
    console.log('=================================================');
    console.log(message);
    console.log('=================================================');
};

const testConnection = async () => {
    try {
        await models.sequelize.authenticate();
        formatMessage('Conexão estabelecida com sucesso.');
        
        await models.sequelize.sync();
        formatMessage('Todos os módulos foram sincronizados com sucesso.');
    } catch (error) {
        console.error('Não foi possível conectar ao banco de dados:', error.message);
    }
};

module.exports = testConnection;
