const getAllClients = `
  SELECT * FROM clients
`;

const getClientById = `
    SELECT * FROM clients WHERE id = ?
`;

const getLastClient = `
    SELECT * FROM clients ORDER BY id DESC LIMIT 1
`;

const addClient = `
    INSERT INTO clients
        (name, email, cpf, birthdate, street, city, district, state, country, zipcode, number)
    VALUES
        (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`;

const updateClient = `
    UPDATE clients SET
        name = ?,
        email = ?,
        cpf = ?,
        birthdate = ?,
        street = ?,
        city = ?,
        district = ?,
        state = ?,
        country = ?,
        zipcode = ?,
        number = ?
    WHERE id = ?
`;

const removeClient = `
    DELETE FROM clients WHERE id = ?
`;

module.exports = {
    getAllClients,
    getClientById,
    getLastClient,
    addClient,
    updateClient,
    removeClient,
};
