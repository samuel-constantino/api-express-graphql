const { db } = require('../database/database');
const {
    getAllClients,
    getClientById,
    getLastClient,
    addClient,
    updateClient,
    removeClient,
} = require('../database/queriesSQL/clients');

const getAll = async () => {
    return new Promise((resolve, reject) => {
        db.all(
            getAllClients,
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
            getClientById,
            id,
            (err, row) => {
                err && reject(err);

                resolve(row);
            },
        );
    });
};

const create = async (args) => {
    const {
        name,
        email,
        cpf,
        birthdate,
        street,
        city,
        district,
        state,
        country,
        zipcode,
        number
    } = args;

    return new Promise((resolve, reject) => {
        const params = [
            name,
            email,
            cpf,
            birthdate,
            street,
            city,
            district,
            state,
            country,
            zipcode,
            number,
        ];
        db.run(
            addClient,
            params,
            (err) => { err && reject(err) },
        );

        db.get(
            getLastClient,
            (err, row) => {
                err && reject(err);
                
                resolve(row);
            }
        )
    });
};

const update = async (args) => {
    const {
        id,
        name,
        email,
        cpf,
        birthdate,
        street,
        city,
        district,
        state,
        country,
        zipcode,
        number
    } = args;

    return new Promise((resolve, reject) => {
        const params = [
            name,
            email,
            cpf,
            birthdate,
            street,
            city,
            district,
            state,
            country,
            zipcode,
            number,
            id,
        ];
        db.run(
            updateClient,
            params,
            (err) => { err && reject(err) },
        );

        db.get(
            getClientById,
            id,
            (err, row) => {
                err && reject(err);
                
                resolve(row);
            }
        )
    });
};

const remove = async (id) => {
    return new Promise((resolve, reject) => {
        db.run(
            removeClient,
            id,
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
