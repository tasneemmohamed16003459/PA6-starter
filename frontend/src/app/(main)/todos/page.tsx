import Link from "next/link";

interface Todo {
  id: string;
  title: string;
  done: boolean;
}

async function getTodos(): Promise<Todo[]> {
  const res = await fetch(`${process.env.API_URL}/todos`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch todos");
  return res.json();
}

export default async function TodosPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const resolvedParams = await searchParams;
  const status = resolvedParams.status;
  const todos = await getTodos();

  const filtered = todos.filter((t) => {
    if (status === "done") return t.done;
    if (status === "open") return !t.done;
    return true;
  });

  return (
    <div className="space-y-4 max-w-xl">
      <h1 className="text-2xl font-bold">Todo List</h1>
      <div className="flex gap-2">
        <Link href="/todos" className="px-3 py-1 bg-gray-200 rounded">All</Link>
        <Link href="/todos?status=open" className="px-3 py-1 bg-orange-200 rounded">Open</Link>
        <Link href="/todos?status=done" className="px-3 py-1 bg-green-200 rounded">Done</Link>
      </div>
      <ul className="space-y-2">
        {filtered.map((todo) => (
          <li key={todo.id} className="p-3 border rounded flex justify-between items-center bg-white">
            <Link href={`/todos/${todo.id}`} className="hover:underline">
              <span className={todo.done ? "line-through text-gray-400" : ""}>{todo.title}</span>
            </Link>
            <span className={`text-xs px-2 py-1 rounded ${todo.done ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"}`}>
              {todo.done ? "Done" : "Open"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}