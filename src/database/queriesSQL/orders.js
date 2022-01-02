const getOrdersQuery = `
    SELECT * FROM orders
`;

const getOrderByIdQuery = `
    SELECT * FROM orders WHERE id = ?
`;

const getLastOrderQuery = `
    SELECT * FROM orders ORDER BY id DESC LIMIT 1
`;

const getOrderProductsQuery = `
    SELECT * FROM order_products
`;

const getOrderProductById = `
    SELECT * FROM order_products WHERE id = ?
`;

const addOrderQuery = `
    INSERT INTO orders
        (products, createdAt, installments, clientId, status)
    VALUES
        (?, ?, ?, ?, ?)
`;

const addOrderProductQuery = `
    INSERT INTO order_products
        (orderId, productId)
    VALUES
        (?, ?)
`;

const updateOrderQuery = `
    UPDATE orders SET
        products = ?,
        createdAt = ?,
        installments = ?,
        clientId = ?,
        status = ?
    WHERE id = ?
`;

const removeOrderQuery = `
    DELETE FROM orders WHERE id = ?
`;

const removeOrderProductsQuery = `
DELETE FROM order_products WHERE orderId = ?
`;

module.exports = {
    getOrdersQuery,
    getOrderByIdQuery,
    getLastOrderQuery,
    getOrderProductsQuery,
    getOrderProductById,
    addOrderQuery,
    addOrderProductQuery,
    updateOrderQuery,
    removeOrderQuery,
    removeOrderProductsQuery,
};
