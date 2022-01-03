const nodemailer = require('nodemailer');

require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: process.env.HOST_EMAIL,
    port: process.env.PORT_EMAIL,
    secure: false,
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.PASS_EMAIL,
    },
    tls: {
        rejectUnauthorized: false,
    }
});

const sendEmail = async (client) => {
    try{

        const { name, email } = client;

        const send = await transporter.sendMail({
            text: `Olá ${name}, seu pedido foi recebido com sucesso!`,
            subject: 'Pedido Recebido',
            from: `Loja <${process.env.USER_EMAIL}>`,
            to: [`${email}`],
        });
    
        console.log(send);

    }catch(err) {
        console.log(err);
    }
};

module.exports = sendEmail;