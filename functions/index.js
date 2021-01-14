const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HdbRJITlxwxRaguZ274rKpgHIvCIdzsr15kY8IJA5p6oLbi9jh2l66rOrHIcC9J2TRNcCNelPygxnhrpwqXOb3800RHm8IpJC');

// API

// -API Config
const app = express();

// -Middlewares
app.use(cors({ origin:true }));
app.use(express.json());

//-API Routes
app.get('/', (request, response) => response.status(200).send('Hello World'));

app.post('/payments/create', async(request, response) => {
    const total = request.query.total;

    console.log('Payment request recieved for amount: ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    //OK -- Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//Listen Command
exports.api = functions.https.onRequest(app)

