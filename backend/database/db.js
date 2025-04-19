// dotenv is used to load environment variables from a .env file into process.env
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.xjkiob3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {

        const paitentsData = client.db(process.env.DB_DBNAME).collection("paitents");
        const doctorsData = client.db(process.env.DB_DBNAME).collection("doctors");
        const hospitalData = client.db(process.env.DB_DBNAME).collection("hospital");

    } finally {
        // do nothing
    }
}

run().catch(console.dir);
