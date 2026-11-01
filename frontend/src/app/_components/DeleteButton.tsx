"use client";
import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: { id: string }) {
  const router = useRouter();
  const handleDelete = async () => {
    const res = await fetch(`http://localhost:3000/todos/${id}`, { method: "DELETE" });
    if (res.ok) {
      router.push("/todos");
      router.refresh();
    }
  };
  return <button onClick={handleDelete} className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>;
}