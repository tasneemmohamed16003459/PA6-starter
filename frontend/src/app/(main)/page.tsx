async function getStats() {
  const res = await fetch("http://localhost:3001/api/stats", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed");
  return res.json();
}

export default async function HomePage() {
  const stats = await getStats().catch(() => ({ total: 0, done: 0, open: 0 }));
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Todo Dashboard Home</h1>
      <div className="flex gap-4 p-4 bg-white border rounded max-w-md">
        <div>Total: <b>{stats.total}</b></div>
        <div>Done: <b className="text-green-600">{stats.done}</b></div>
        <div>Open: <b className="text-orange-600">{stats.open}</b></div>
      </div>
    </div>
  );
}