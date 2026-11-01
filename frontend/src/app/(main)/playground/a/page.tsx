import Link from "next/link";
export default function PageA() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Playground A</h2>
      <Link href="/playground/b" className="text-blue-600 underline block">Go to Playground B</Link>
    </div>
  );
}