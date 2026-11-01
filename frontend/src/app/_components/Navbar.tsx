"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const getLinkClass = (path: string) => 
    pathname === path ? "font-bold underline text-blue-600" : "text-gray-700 hover:text-blue-600";

  return (
    <nav className="p-4 bg-gray-100 flex gap-6 border-b">
      <Link href="/" className={getLinkClass("/")}>Home</Link>
      <Link href="/todos" className={getLinkClass("/todos")}>Todos</Link>
      <Link href="/todos/new" className={getLinkClass("/todos/new")}>New Todo</Link>
      <Link href="/dashboard" className={getLinkClass("/dashboard")}>Dashboard</Link>
    </nav>
  );
}