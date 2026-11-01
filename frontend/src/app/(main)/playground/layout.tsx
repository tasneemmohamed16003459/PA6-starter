"use client";
import { useState } from "react";

export default function PlaygroundLayout({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  return (
    <div className="p-4 border border-blue-500 space-y-4">
      <p className="font-bold text-blue-600">Layout Counter: {count}</p>
      <button onClick={() => setCount(count + 1)} className="px-3 py-1 bg-blue-600 text-white rounded">Increment Layout</button>
      <div>{children}</div>
    </div>
  );
}