import Link from "next/link";
export default function PageB() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Playground B</h2>
      <Link href="/playground/a" className="text-blue-600 underline block">Go to Playground A</Link>
    </div>
  );
}