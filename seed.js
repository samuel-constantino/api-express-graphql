const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./e-commerce.db');

const insertAdress = (street, city, district, state, country, zipcode, number) => {
    const query = `
        INSERT INTO adresses (street, city, district, state, country, zipcode, number)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const params = [street, city, district, state, country, zipcode, number];

    return db.run(query, params);
};

const insertClient = (name, email, cpf, birthdate, adress_id) => {
    const query = `
        INSERT INTO clients (name, email, cpf, birthdate, adress_id)
        VALUES (?, ?, ?, ?, ?)
    `;

    const params = [name, email, cpf, birthdate, adress_id];

    return db.run(query, params);
};

const insertProduct = (name, image, description, weight, price, quantity) => {
    const query = `
        INSERT INTO products (name, image, description, weight, price, quantity)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    const params = [name, image, description, weight, price, quantity];

    return db.run(query, params);
};

const insertOrder = (client_id, product_id, created_at, installments, status) => {
    const query = `
        INSERT INTO orders (client_id, product_id, created_at, installments, status)
        VALUES (?, ?, ?, ?, ?)
    `;

    const params = [client_id, product_id, created_at, installments, status];

    return db.run(query, params);
};

insertAdress('Rua dos Devs', 'Icapuí', 'Centro', 'Ceará', 'Brasil', '62810-000', '101');
insertAdress('Rua Nova', 'Aracati', 'Centro', 'Ceará', 'Brasil', '62810-100', '110');

insertClient('João', 'joao@teste.com', '123.456.789-01', '2000-01-01', 1);
insertClient('Maria', 'maria@teste.com', '123.456.789-02', '2000-01-02', 2);

insertProduct('Coca-Cola', 'https://www.coca-cola.com.br/assets/img/br/produtos/coca-cola-zero-sabor-lata-1l-1.png', 'Refrigerante 1', 0.5, 4.50, 10);
insertProduct('Fanta', 'https://www.coca-cola.com.br/assets/img/br/produtos/fanta-zero-sabor-lata-1l-1.png', 'Refrigerante 2', 0.5, 4.50, 10);

insertOrder(1, 1, '2020-01-01', 1, 'PENDENTE');
insertOrder(1, 2, '2020-01-01', 1, 'PENDENTE');