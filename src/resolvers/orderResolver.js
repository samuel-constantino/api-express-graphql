const { db } = require('../database/database');
const {
    getAllOrders,
    getOrderById,
    getLastOrder,
    addOrder,
    updateOrder,
    removeOrder,
} = require('../database/queriesSQL/orders');

const { getClientById } = require('../database/queriesSQL/clients');

const { getProductById, updateProduct } = require('../database/queriesSQL/products');

const sendEmail = require('../util/sendEmail');

const getAll = async () => {
    return new Promise((resolve, reject) => {
        db.all(
            getAllOrders,
            (err, rows) => {
                err && reject(err);

                resolve(rows);
            },
        );
    });
};

const getById = async (id) => {
    return new Promise((resolve, reject) => {
        db.get(
            getOrderById,
            [id],
            (err, row) => {
                err && reject(err);

                resolve(row);
            },
        );
    });
};

const create = async (args) => {
    const { client_id, product_id, created_at, installments, status } = args;

    return new Promise((resolve, reject) => {
        const params = [
            client_id,
            product_id,
            created_at,
            installments,
            status,
        ];

        // Verifica quantidade de produtos
        db.get(
            getProductById,
            [product_id],
            (err, row) => {
                err && reject(err);

                if (row.quantity >= 1) {

                    // Adiciona o pedido no banco de dados
                    db.run(
                        addOrder,
                        params,
                        (err) => { err && reject(err) },
                    );

                    // Atualiza estoque de produtos
                    db.get(
                        getProductById,
                        [product_id],
                        (err, row) => {
                            err && reject(err);
                            
                            const { name, image, description, weight, price, quantity } = row;

                            const params = [
                                name,
                                image,
                                description,
                                weight,
                                price,
                                quantity - 1,
                                product_id,
                            ];

                            db.run(
                                updateProduct,
                                params,
                                (err) => { err && reject(err) },
                            );
                        },
                    );
                    
                    // Envia email para o cliente
                    db.get(
                        getClientById,
                        [client_id],
                        (err, row) => {
                            err && reject(err);

                            process.env.SEND_EMAIL === 'true' && sendEmail(row);
                        }
                    );

                    // Busca e retorna o pedido que acabou de ser adicionado
                    db.get(
                        getLastOrder,
                        (err, row) => {
                            err && reject(err);
                            console.log(row)
                            resolve(row);
                        },
                    );

                } else {
                    reject(new Error('Não há estoque disponível para este produto'));
                }
            },
        );
    });
};

const update = async (args) => {
    const { id, client_id, product_id, created_at, installments, status } = args;

    return new Promise((resolve, reject) => {
        const params = [
            client_id,
            product_id,
            created_at,
            installments,
            status,
            id,
        ];

        db.run(
            updateOrder,
            params,
            (err) => { err && reject(err) },
        );

        db.get(
            getOrderById,
            [id],
            (err, row) => {
                err && reject(err);

                resolve(row);
            },
        );
    });
};

const remove = async (id) => {
    return new Promise((resolve, reject) => {
        db.run(
            removeOrder,
            [id],
            (err) => { err && reject(err) },
        );

        resolve({id});
    });
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
};
