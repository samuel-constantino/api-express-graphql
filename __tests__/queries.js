const supertest = require('supertest');

const app = require('../src/app');

const request = supertest(app);

describe('fetch clients', () => {

    it('should return all clients', async () => {
        const response = await request
            .post('/graphql')
            .send({
                query: `
                    query getAllClients{
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
                    query getById {
                            client(id:1){
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

    it('should update a client', async () => {
        const response = await request
            .post('/graphql')
            .send({
                query: `
                    mutation updateClient{
                        updateClient(
                            id: 1,
                            name: "Cliente Teste 1",
                            email: "teste1@teste.com",
                            cpf: "022.123.433-21",
                            birthdate: "1998-02-01",
                            street: "Rua Teste 1",
                            city: "Cidade Teste 1",
                            district: "Bairro Teste 1",
                            state: "Estado Teste 1",
                            country: "País Teste 1",
                            zipcode: "32230-121",
                            number: "211"
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

describe('fetch products', () => {
    it('should return all products', async () => {
        const response = await request
            .post('/graphql')
            .send({
                query: `
                    query getAllProducts{
                        products{
                            id,
                            name,
                            description,
                            weight,
                            price,
                            quantity
                        }
                    }
                `,
            })
            .set('Accept', 'application/json');
        
        expect(response.status).toBe(200);
    });

    it('should return a product', async () => {
        const response = await request
            .post('/graphql')
            .send({
                query: `
                    query getProductById{
                        product(id:1){
                            id,
                            name,
                            description,
                            weight,
                            price,
                            quantity
                        }
                    }
                `,
            })
            .set('Accept', 'application/json');
        
        expect(response.status).toBe(200);
    });

    it('should add a product', async () => {
        const response = await request
            .post('/graphql')
            .send({
                query: `
                    mutation addProduct{
                        addProduct(
                            name: "Produto Teste",
                            image: "URL-Teste"
                            description: "Descrição Teste",
                            weight: 1.5,
                            price: 2.5,
                            quantity: 2
                        ){
                            id,
                            name,
                            description,
                            weight,
                            price,
                            quantity
                        }
                    }
                `,
            })
            .set('Accept', 'application/json');
        
        expect(response.status).toBe(200);
    });

    it('should update a client', async () => {
        const response = await request
            .post('/graphql')
            .send({
                query: `
                    mutation updateProduct{
                        updateProduct(
                            id: 1,
                            name: "Produto Teste 1",
                            image: "URL-Teste 1"
                            description: "Descrição Teste 1",
                            weight: 1.5,
                            price: 2.5,
                            quantity: 2
                        ){
                            id,
                            name,
                            description,
                            weight,
                            price,
                            quantity
                        }
                    }
                `,
            })
            .set('Accept', 'application/json');

        expect(response.status).toBe(200);
                    
    });

    it('should remove a product', async () => {
        const response = await request
            .post('/graphql')
            .send({
                query: `
                    mutation removeProduct{
                        removeProduct(id:4){
                            id,
                        }
                    }
                `,
            })
            .set('Accept', 'application/json');
        
        expect(response.status).toBe(200);
    });
});

describe('fetch orders', () => {
    it('should return all orders', async () => {
        const response = await request
            .post('/graphql')
            .send({
                query: `
                    query getAllOrders{
                        orders{
                            id,
                            client_id,
                            product_id,
                            created_at,
                            installments,
                            status
                        }
                    }
                `,
            })
            .set('Accept', 'application/json');
        
        expect(response.status).toBe(200);
    });

    it('should return a order', async () => {
        const response = await request
            .post('/graphql')
            .send({
                query: `
                    query getOrderById{
                        order(id:1){
                            id,
                            client_id,
                            product_id,
                            created_at,
                            installments,
                            status
                        }
                    }
                `,
            })
            .set('Accept', 'application/json');
        
        expect(response.status).toBe(200);
    });

    it('should add a order', async () => {
        const response = await request
            .post('/graphql')
            .send({
                query: `
                    mutation addOrder{
                        addOrder(
                            client_id: 1,
                            product_id: 1,
                            created_at: "2020-09-01",
                            installments: 2,
                            status: "PENDENTE"
                        ){
                            id,
                            client_id,
                            product_id,
                            created_at,
                            installments,
                            status
                        }
                    }
                `,
            })
            .set('Accept', 'application/json');
        
        expect(response.status).toBe(200);
    });

    it('should update a order', async () => {
        const response = await request
            .post('/graphql')
            .send({
                query: `
                    mutation updateOrder{
                        updateOrder(
                            id: 1,
                            client_id: 2,
                            product_id: 2,
                            created_at: "2020-09-02",
                            installments: 3,
                            status: "PENDENTE"
                        ){
                            id,
                            client_id,
                            product_id,
                            created_at,
                            installments,
                            status
                        }
                    }
                `,
            })
            .set('Accept', 'application/json');

        expect(response.status).toBe(200);
                    
    });

    it('should remove a order', async () => {
        const response = await request
            .post('/graphql')
            .send({
                query: `
                mutation removeOrder{
                    removeOrder(id: 5){
                            id,
                        }
                    }
                `,
            })
            .set('Accept', 'application/json');
        
        expect(response.status).toBe(200);
    });
});