
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = 'mongodb+srv://jack12:0EhXJsbjhviXBZeE@mer-learn2.ehyuufp.mongodb.net/?retryWrites=true&w=majority'

import { publicProcedure, router } from './trpc';
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
 const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
try{
   client.connect();
}catch(err){
  console.log(err);
  
}
export const appRouter = router({
  getAllBooks: publicProcedure
    .query(async () => {
      
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
        const dbName = "Bookstore";
        const collectionName = "books";
        const database = client.db(dbName)
        const collection = database.collection(collectionName);

      const data =collection.find({}).sort({ createdAt: -1 })
      // const allBooks=await data.json()
             
      return data;
      // return [10,20,30];
    }),
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
