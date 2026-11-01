import Link from "next/link";
import { notFound } from "next/navigation";
import DeleteButton from "@/app/_components/DeleteButton";

interface Todo {
  id: string;
  title: string;
  done: boolean;
}

async function getTodo(id: string): Promise<Todo | null> {
  const res = await fetch(`${process.env.API_URL}/todos/${id}`, { cache: "no-store" });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Failed");
  return res.json();
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolved = await params;
  const todo = await getTodo(resolved.id);
  return { title: todo ? todo.title : "Not Found" };
}

export default async function TodoDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolved = await params;
  const todo = await getTodo(resolved.id);
  if (!todo) notFound();

  return (
    <div className="space-y-4 max-w-md">
      <h1 className="text-2xl font-bold">Todo Details</h1>
      <div className="p-4 border rounded space-y-2 bg-white">
        <p><strong>ID:</strong> {todo.id}</p>
        <p><strong>Title:</strong> {todo.title}</p>
        <p><strong>Status:</strong> {todo.done ? "Done" : "Open"}</p>
      </div>
      <div className="flex gap-4 items-center">
        <Link href="/todos" className="text-blue-600 underline">Back</Link>
        <DeleteButton id={todo.id} />
      </div>
    </div>
  );
}