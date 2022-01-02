const getAllProducts = `
    SELECT * FROM products
`;

const getProductById = `
    SELECT * FROM products WHERE id = ?
`;

const getLastProduct = `
    SELECT * FROM products ORDER BY id DESC LIMIT 1
`;

const addProduct = `
INSERT INTO products
    (name, image, description, weight, price, quantity)
VALUES
    (?, ?, ?, ?, ?, ?)
`;

const updateProduct = `
UPDATE products SET
    name = ?,
    image = ?,
    description = ?,
    weight = ?,
    price = ?,
    quantity = ?
WHERE id = ?
`;

const removeProduct = `
    DELETE FROM products WHERE id = ?
`;

module.exports = {
    getAllProducts,
    getProductById,
    getLastProduct,
    addProduct,
    updateProduct,
    removeProduct,
};
