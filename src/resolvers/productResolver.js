const { db } = require('../database/database');
const {
    getAllProducts,
    getProductById,
    getLastProduct,
    addProduct,
    updateProduct,
    removeProduct,
} = require('../database/queriesSQL/products');

const getAll = async () => {
    return new Promise((resolve, reject) => {
        db.all(
            getAllProducts,
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
            getProductById,
            [id],
            (err, row) => {
                err && reject(err);

                resolve(row);
            },
        );
    });
};

const create = async (args) => {
    const { name, image, description, weight, price, quantity } = args;
    return new Promise((resolve, reject) => {
        const params = [
            name,
            image,
            description,
            weight,
            price,
            quantity,
        ];

        db.run(
            addProduct,
            params,
            (err) => { err && reject(err) },
        );

        db.get(
            getLastProduct,
            (err, row) => {
                err && reject(err);

                resolve(row);
            },
        );
    });
};

const update = async (args) => {
    const { id, name, image, description, weight, price, quantity } = args;
    return new Promise((resolve, reject) => {
        const params = [
            name,
            image,
            description,
            weight,
            price,
            quantity,
            id,
        ];

        db.run(
            updateProduct,
            params,
            (err) => { err && reject(err) },
        );

        db.get(
            getProductById,
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
            removeProduct,
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
