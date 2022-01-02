const { db } = require('./database/database');
const { getAllClients } = require('./database/queriesSQL/clients');

const resolvers = {
    clients: async () => {
        return new Promise((resolve, reject) => {
            db.all(getAllClients,
                (err, rows) => {
                    err && reject(err)
                    console.log(rows)
                    resolve(rows);
                },
            );
        });
    },
};

module.exports = resolvers;
