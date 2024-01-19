
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = 'mongodb+srv://jack12:0EhXJsbjhviXBZeE@mer-learn2.ehyuufp.mongodb.net/?retryWrites=true&w=majority'

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
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        // Provide the name of the database and collection you want to use.
        // If the database and/or collection do not exist, the driver and Atlas
        // will create them automatically when you first write data.
        const dbName = "Bookstore";
        const collectionName = "books";


        // Create references to the database and collection in order to run
        // operations on them.
        const database = client.db(dbName)
        const collection = database.collection(collectionName);
        // Send a ping to confirm a successful connection
        await database.command({ ping: 1 });
        const data = await collection.find({})
        console.log(data);
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        console.log("You successfully closed MongoDB!");
        await client.close();
    }
}
run().catch(console.dir);
