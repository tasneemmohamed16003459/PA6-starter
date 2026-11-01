import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(`${process.env.API_URL}/todos`, { cache: "no-store" });
    if (!res.ok) return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
    const todos: { id: string; title: string; done: boolean }[] = await res.json();

    const total = todos.length;
    const done = todos.filter((t) => t.done).length;
    const open = total - done;

    return NextResponse.json({ total, done, open });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}