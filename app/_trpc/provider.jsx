"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
// import { type ThemeProviderProps } from "next-themes/dist/types";
// import superjson from "superjson";

import { trpc } from "./client";

// NOTE: Import the URL from the server where you
// have access to process.env.NODE_ENV
// e.g. import { url } from "@/config"

// const url =
//  process.env.NODE_ENV === "production"
//    ? "your-production-url/api/trpc"
//     : "http://localhost:3000/api/trpc"

// interface ProviderProps {
//   children: React.ReactNode;
// }

export function Provider({ children }) {
  const [queryClient] = useState(() => new QueryClient({}));

  const [trpcClient] = useState(() =>
    trpc.createClient({
      // transformer: superjson,
      links: [
        httpBatchLink({
          // import 'url' from a server file.
          //   url: `${url}/api/trpc`,
          url: "http://localhost:3000/api/trpc",
        }),
      ],
    }),
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
