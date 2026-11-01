"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewTodoPage() {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.message || data.error || "Error creating todo");
      return;
    }
    router.push("/todos");
    router.refresh();
  };

  return (
    <div className="max-w-md space-y-4">
      <h1 className="text-2xl font-bold">New Todo</h1>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Title..."
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
      </form>
    </div>
  );
}