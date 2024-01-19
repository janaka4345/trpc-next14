
import dbConnect from './mongoose';
import { publicProcedure, router } from './trpc';
import bookModel from './db/bookModel'

export const appRouter = router({
  getAllBooks: publicProcedure
    .query(async () => {
      // Retrieve users from a data source, this is an imaginary database
      const data = await bookModel.find({}).sort({ createdAt: -1 })
      const allBooks=await data.json()
             
      return allBooks;
      // return [10,20,30];
    }),
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
