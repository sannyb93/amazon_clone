const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const Stripe = require("stripe")
('sk_test_51IWd8vDp9jLHghZGv18nXLQjK4dsRLBQ6kAhnSstYSSlI3cO7FK5Mc9EpB59vtzINO1w9RShF2Uz7mbJftWmoWac005W5goAsR')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });



// - API

// - APP CONFIG
const app = express();

// - MIDDLEWARES
app.use(cors({ origin: true}));
app.use(express.json());

// - API ROUTES
app.get('/', (request, response) => response.status(200).send('hello world'));


app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved BOOM!!!! for this amount >>>', total)

    const paymentIntent = await Stripe.paymentIntent.create({
        amount: total, //sub units  of the currency
        currency: "usd",
    });

    // ok - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});



// - LISTEN COMMAND
exports.api = functions.https.onRequest(app);

//Example end point
//http://localhost:5001/clone-b8b1b/us-central1/api