const getAllOrders = `
    SELECT * FROM orders
`;

const getOrderById = `
    SELECT * FROM orders WHERE id = ?
`;

const getLastOrder = `
    SELECT * FROM orders ORDER BY id DESC LIMIT 1
`;

const addOrder = `
    INSERT INTO orders
        (client_id, product_id, created_at, installments, status)
    VALUES
        (?, ?, ?, ?, ?)
`;

const updateOrder = `
    UPDATE orders SET
        client_id = ?,
        product_id = ?,
        created_at = ?,
        installments = ?,
        status = ?
    WHERE id = ?
`;

const removeOrder = `
    DELETE FROM orders WHERE id = ?
`;

module.exports = {
    getAllOrders,
    getOrderById,
    getLastOrder,
    addOrder,
    updateOrder,
    removeOrder,
};
