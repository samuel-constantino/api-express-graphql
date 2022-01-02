const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./e-commerce.db');

const insertClient = (data) => {
    const query = `
        INSERT INTO clients (name, email, cpf, birthdate, street, city, district, state, country, zipcode, number)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const params = [...data];

    return db.run(query, params);
};

const insertProduct = (data) => {
    const query = `
        INSERT INTO products (name, image, description, weight, price, quantity)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    const params = [...data];

    return db.run(query, params);
};

const insertOrder = (data) => {
    const query = `
        INSERT INTO orders (client_id, product_id, created_at, installments, status)
        VALUES (?, ?, ?, ?, ?)
    `;

    const params = [...data];

    return db.run(query, params);
};

insertClient(['João', 'joao@teste.com', '123.456.789-01', '2000-01-01', 'Rua dos Devs', 'Icapuí', 'Centro', 'Ceará', 'Brasil', '62810-000', '101']);
insertClient(['Maria', 'maria@teste.com', '123.456.789-02', '2000-01-02', 'Rua Nova', 'Aracati', 'Centro', 'Ceará', 'Brasil', '62810-100', '110']);

insertProduct(['Coca-Cola', 'https://www.coca-cola.com.br/assets/img/br/produtos/coca-cola-zero-sabor-lata-1l-1.png', 'Refrigerante 1', 0.5, 4.50, 3]);
insertProduct(['Fanta', 'https://www.coca-cola.com.br/assets/img/br/produtos/fanta-zero-sabor-lata-1l-1.png', 'Refrigerante 2', 0.5, 4.50, 1]);

insertOrder([1, 1, '2020-01-01', 1, 'PENDENTE']);
insertOrder([1, 2, '2020-01-01', 1, 'PENDENTE']);