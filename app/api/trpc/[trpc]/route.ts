
import { fetchRequestHandler } from "@trpc/server/adapters/fetch"
import {appRouter} from '../../../../server/index'
// import {appRouter} from '@/server'

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    // This line of code will create the context asynchronously
    // whenever you call a tRPC endpoint.
    createContext:()=>({})
  })

export { handler as GET, handler as POST }