const getAllClients = `
  SELECT * FROM clients
`;

const getClientByIdQuery = `
    SELECT * FROM clients WHERE id = ?
`;

const getLastClient = `
    SELECT * FROM clients ORDER BY id DESC LIMIT 1
`;

const addClientQuery = `
    INSERT INTO clients
        (name, email, cpf, birthDate, street, district, state, country, zipcode, number)
    VALUES
        (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`;

const updateClientQuery = `
    UPDATE clients SET
        name = ?,
        email = ?,
        cpf = ?,
        birthDate = ?,
        street = ?,
        district = ?,
        state = ?,
        country = ?,
        zipcode = ?,
        number = ?
    WHERE id = ?
`;

const removeClientQuery = `
    DELETE FROM clients WHERE id = ?
`;

module.exports = {
    getAllClients,
    getClientByIdQuery,
    getLastClient,
    addClientQuery,
    updateClientQuery,
    removeClientQuery,
};
