const getProductsQuery = `
    SELECT * FROM products
`;

const getProductByIdQuery = `
    SELECT * FROM products WHERE id = ?
`;

const getLastProductQuery = `
    SELECT * FROM products ORDER BY id DESC LIMIT 1
`;

const addProductQuery = `
INSERT INTO products
    (name, image, description, weight, price, quantity)
VALUES
    (?, ?, ?, ?, ?, ?)
`;

const updateProductQuery = `
UPDATE products SET
    name = ?,
    image = ?,
    description = ?,
    weight = ?,
    price = ?,
    quantity = ?
WHERE id = ?
`;

const updateProductQuantityQuery = `
    UPDATE products SET
        quantity = quantity - ?
    WHERE id = ?
`;

const removeProductQuery = `
    DELETE FROM products WHERE id = ?
`;

module.exports = {
    getProductsQuery,
    getProductByIdQuery,
    getLastProductQuery,
    addProductQuery,
    updateProductQuery,
    updateProductQuantityQuery,
    removeProductQuery,
};
