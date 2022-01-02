const supertest = require('supertest');

const app = require('../src/app');

const request = supertest(app);

describe('fetch clients', () => {
    it('should return all clients', async () => {
        const response = await request
            .post('/graphql')
            .send({
                query: `
                    {
                        clients{
                            id,
                            name,
                            email,
                            cpf,
                            birthdate,
                            street,
                            city,
                            district,
                            state,
                            country,
                            zipcode,
                            number,
                        }
                    }
                `,
            })
            .set('Accept', 'application/json');
        
        expect(response.status).toBe(200);
    });

    it('should return a client', async () => {
        const response = await request
            .post('/graphql')
            .send({
                query: `
                    {
                        client(id: 1){
                            id,
                            name,
                            email,
                            cpf,
                            birthdate,
                            street,
                            city,
                            district,
                            state,
                            country,
                            zipcode,
                            number,
                        }
                    }
                `,
            })
            .set('Accept', 'application/json');
        
        expect(response.status).toBe(200);
    });

    it('should add a client', async () => {
        const response = await request
            .post('/graphql')
            .send({
                query: `
                    mutation {
                        addClient(
                            name: "Cliente Teste",
                            email: "teste@teste.com",
                            cpf: "022.123.433-23",
                            birthdate: "1998-02-02",
                            street: "Rua Teste",
                            city: "Cidade Teste",
                            district: "Bairro Teste",
                            state: "Estado Teste",
                            country: "País Teste",
                            zipcode: "32230-123",
                            number: "21a"
                        ){
                            id,
                            name,
                            email,
                            cpf,
                            birthdate,
                            street,
                            city,
                            district,
                            state,
                            country,
                            zipcode,
                            number,
                        }
                    }
                `,
            })
            .set('Accept', 'application/json');
        
        expect(response.status).toBe(200);
    });

    it('should remove a client', async () => {
        const response = await request
            .post('/graphql')
            .send({
                query: `
                    mutation {
                        removeClient(id: 1){
                            id,
                        }
                    }
                `,
            })
            .set('Accept', 'application/json');
        
        expect(response.status).toBe(200);
    });
});