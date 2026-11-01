export default async function HelpPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolved = await params;
  const breadcrumb = ["Help", ...(resolved.slug || [])].join(" > ");
  return <div className="p-4 bg-white border rounded">Breadcrumb: {breadcrumb}</div>;
}