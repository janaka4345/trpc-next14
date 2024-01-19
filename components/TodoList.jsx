"use client";
import { trpc } from "../app/_trpc/client";
export default function TodoList() {
  const getTodos = trpc.getTodos.useQuery();

  return (
    <div>
      <pre>{JSON.stringify(getTodos.data, null, 2)}</pre>
    </div>
  );
}
