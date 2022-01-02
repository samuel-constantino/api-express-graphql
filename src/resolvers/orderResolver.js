const { db } = require('../database/database');
const {
    getAllOrders,
    getOrderById,
    getLastOrder,
    addOrder,
    updateOrder,
    removeOrder,
} = require('../database/queriesSQL/orders');

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

        db.run(
            addOrder,
            params,
            (err) => { err && reject(err) },
        );

        db.get(
            getLastOrder,
            (err, row) => {
                err && reject(err);

                resolve(row);
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
