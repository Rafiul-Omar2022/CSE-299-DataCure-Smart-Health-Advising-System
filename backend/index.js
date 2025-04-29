const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors = require('cors');
const path = require('path');


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Importing routes
const homeRoutes = require('./routes/homeRoutes.js');
const notFoundRoutes = require('./routes/404.js');

// dotenv is used to load environment variables from a .env file into process.env
require('dotenv').config()
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.xjkiob3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

app.use('/', homeRoutes); // Home route
app.use(notFoundRoutes); // 404 route should be the last one

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();

        const paitentsData = client.db(process.env.DB_DBNAME).collection("paitents");
        const doctorsData = client.db(process.env.DB_DBNAME).collection("doctors");
        const hospitalData = client.db(process.env.DB_DBNAME).collection("hospital");


        app.post("/add-doctor", async (req, res) => {
            const newDoctor = req.body;
            console.log(newDoctor);
            const result = await doctorsData.insertOne(newDoctor);
            res.send(result);
            console.log(result);

            res.status(201).json({ insertedId: result.insertedId });
        });

        app.post("/add-paitent", async (req, res) => {
            const newDoctor = req.body;
            console.log(newDoctor);
            const result = await doctorsData.insertOne(newDoctor);
            res.send(result);
            console.log(result);

            res.status(201).json({ insertedId: result.insertedId });
        });

        app.get("/view-doctor", async (req, res) => {
            const newDoctor = req.body;
            console.log(newDoctor);
            const result = await doctorsData.insertOne(newDoctor);
            res.send(result);
            console.log(result);

            res.status(201).json({ insertedId: result.insertedId });
        });

        app.get("/view-patient", async (req, res) => {
            const newPatient = req.body;
            console.log(newPatient);
            const result = await paitentsData.findOne({ _id: newPatient.id });
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: "Patient not found" });
            }
        });

        app.get("/view-doctor", async (req, res) => {
            const newDoctor = req.body;
            console.log(newDoctor);
            const result = await doctorsData.findOne({ _id: newDoctor.id });
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: "Doctor not found" });
            }
        });

        app.get("/view-doctor-specialist", async (req, res) => {
            const newDoctor = req.body;
            console.log(newDoctor);
            const result = await doctorsData.findOne({ _id: newDoctor.id });
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: "Doctor not found" });
            }
        });

        app.post("/add-appointment", async (req, res) => {
            const newAppointment = req.body;
            console.log(newAppointment);
            const result = await doctorsData.insertOne(newAppointment);
            res.send(result);
            console.log(result);

            res.status(201).json({ insertedId: result.insertedId });
        });

        app.get("/view-appointment", async (req, res) => {
            const newAppointment = req.body;
            console.log(newAppointment);
            const result = await doctorsData.findOne({ _id: newAppointment.id });
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: "Appointment not found" });
            }
        });

        app.get("/patient-profile", async (req, res) => {
            const patientId = req.params.id;
            const patient = await paitentsData.findOne({ _id: patientId });
            if (patient) {
                res.status(200).json(patient);
            } else {
                res.status(404).json({ message: "Patient not found" });
            }
        });

        app.get("/doctor-profile", async (req, res) => {
            const doctorId = req.params.id;
            const doctor = await doctorsData.findOne({ _id: doctorId });
            if (doctor) {
                res.status(200).json(doctor);
            } else {
                res.status(404).json({ message: "Doctor not found" });
            }
        });

        app.post("payement", async (req, res) => {
            const paymentData = req.body;
            console.log(paymentData);
            const result = await paitentsData.insertOne(paymentData);
            res.send(result);
            console.log(result);

            res.status(201).json({ insertedId: result.insertedId });
        });

        app.get("/payment", async (req, res) => {
            const paymentId = req.params.id;
            const payment = await paitentsData.findOne({ _id: paymentId });
            if (payment) {
                res.status(200).json(payment);
            } else {
                res.status(404).json({ message: "Payment not found" });
            }
        });


        app.get("/doctor-status", async (req, res) => {
            const doctorId = req.params.id;
            const doctor = await doctorsData.findOne({ _id: doctorId });
            if (doctor) {
                res.status(200).json(doctor);
            } else {
                res.status(404).json({ message: "Doctor not found" });
            }
        });

        console.log("Server is running and ready to accept requests.");

    } finally {

    }
}

run().catch(console.dir);


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});