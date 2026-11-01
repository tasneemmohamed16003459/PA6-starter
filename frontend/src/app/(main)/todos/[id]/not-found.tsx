import Link from "next/link";

export default function NotFound() {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold text-red-600">Todo Not Found</h2>
      <Link href="/todos" className="text-blue-600 underline">Back to list</Link>
    </div>
  );
}