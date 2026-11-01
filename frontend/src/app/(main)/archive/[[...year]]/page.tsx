export default async function ArchivePage({ params }: { params: Promise<{ year?: string[] }> }) {
  const resolved = await params;
  const year = resolved.year?.[0];
  return <div className="p-4 bg-white border rounded">Archive: {year ? `Year ${year}` : "All years"}</div>;
}