export default async function SlugPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolved = await params;
  return (
    <div className="p-4 bg-white border rounded max-w-md">
      <h2 className="font-bold">Catch-All Route Priority</h2>
      <p>Slug array: {JSON.stringify(resolved.slug)}</p>
    </div>
  );
}