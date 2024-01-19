"use client";
import { trpc } from "../app/_trpc/client";
export default function TodoList() {
  const getAllBooks = trpc.getAllBooks.useQuery();

  return (
    <div>
      <pre>{JSON.stringify(getAllBooks, null, 2)}</pre>
    </div>
  );
}
