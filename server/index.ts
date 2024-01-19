import { publicProcedure, router } from './trpc';

export const appRouter = router({
  getTodos: publicProcedure
    .query(async () => {
      // Retrieve users from a data source, this is an imaginary database
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data=await res.json()
             
      return data;
      // return [10,20,30];
    }),
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
