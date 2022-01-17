const supertest = require('supertest');

const chai = require('chai');

const { expect } = chai;

const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../src/app');

const request = supertest(app);

describe('testa chamadas aos clientes', function () {
    const header = 'application/json';

    it('deve retornar todos os clientes', async function () {
        const query = `query {
            getAllClients { name, address { cep } }
        }`;

        const response = await request
            .post('/graphql')
            .send({ query })
            .set('Accept', header);
        
        expect(response.status).to.be.equals(200);
    });

    it('deve retornar um cliente', async function () {
        const query = ` query{
            getClient(id: ${1}) { name address { cep } }
        }`;

        const response = await request
            .post('/graphql')
            .send({ query })
            .set('Accept', header);
        
        expect(response.status).to.be.equals(200);
    });

    it('deve adicionar um cliente', async function () {
        const query = `mutation {
            createClient(
                name: "teste5",
                email: "emailteste5",
                cpf: "cpfteste4",
                birthdate: "birthdateteste",
                ){
                    id,
                    name,
                }
        }`;

        const response = await request
            .post('/graphql')
            .send({ query })
            .set('Accept', header);
        
        expect(response.status).to.be.equals(200);
    });
});
