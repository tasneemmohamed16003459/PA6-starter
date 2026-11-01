export default function DashboardLayout({
  stats,
  recent,
}: {
  stats: React.ReactNode;
  recent: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 border bg-white rounded">{stats}</div>
        <div className="p-4 border bg-white rounded">{recent}</div>
      </div>
    </div>
  );
}