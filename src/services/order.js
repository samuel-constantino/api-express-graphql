/* eslint-disable */
// const Sequelize = require('sequelize');
// const { development } = require('../../config/config');

// const sequelize = new Sequelize(development);

const create = async (clientId, productsIds, models) => {
    // const transaction = await sequelize.transaction();

    let message = '';

    try {
        for (let i = 0; i !== productsIds.length; i += 1) {
            const productId = productsIds[i];

            const product = await models.Product.findByPk(productId);

            const { quantity } = product;
            
            if (quantity < 1) {
                message = `Quantidade do produto ${productId} insuficiente.`;
                break;
            }

            // insere produto do array na tabela Orders
            await models.Order.create(
                { clientId, productId },
                // { transaction },
            );
        
            // Atualiza estoque de produtos
            await models.Product.update(
                { ...product, quantity: quantity - 1 },
                {
                    where: { id: productId },
                    // transaction
                },
            );

            message = 'Pedido de compra efetuado com sucesso.';
        }

        // transaction.commit();
        
        return message;
    } catch (e) {
        // await transaction.rollback();
        console.log(e.message);
        return 'Erro ao tentar efetuar pedido.';
    }
};

module.exports = {
    create,
};
