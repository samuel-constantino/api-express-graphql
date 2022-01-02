const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./e-commerce.db');

const createAdressesTable = () => {
    const query = `
        CREATE TABLE IF NOT EXISTS adresses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            street VARCHAR(50) NOT NULL,
            city VARCHAR(50) NOT NULL,
            district VARCHAR(15) NOT NULL,
            state VARCHAR(15) NOT NULL,
            country VARCHAR(15) NOT NULL,
            zipcode VARCHAR(15) NOT NULL,
            number VARCHAR(15)
        )
    `;

    return db.run(query);
};

const createClientsTable = () => {
    const query = `
        CREATE TABLE IF NOT EXISTS clients (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(50) NOT NULL,
            email VARCHAR(50) NOT NULL UNIQUE,
            cpf VARCHAR(14) NOT NULL UNIQUE,
            birthdate DATE NOT NULL,
            adress_id INTEGER NOT NULL,
            FOREIGN KEY (adress_id) REFERENCES adresses(id)
        )
    `;

    return db.run(query);
};

const createProductsTable = () => {
    const query = `
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(50) NOT NULL UNIQUE,
            image VARCHAR(200),
            description VARCHAR(200) NOT NULL UNIQUE,
            weight FLOAT NOT NULL,
            price REAL NOT NULL,
            quantity INTEGER NOT NULL
        )
    `;

    return db.run(query);
};

const createOrdersTable = () => {
    const query = `
        CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            client_id INTEGER NOT NULL,
            product_id INTEGER NOT NULL,
            created_at DATETIME NOT NULL,
            installments INTEGER NOT NULL,
            status VARCHAR(10) NOT NULL
            
        )
    `;
    
    return db.run(query);
};

const createDatabase = () => {
    createAdressesTable();
    createClientsTable();
    createProductsTable();
    createOrdersTable();
};

module.exports = {
    db,
    createDatabase,
};
