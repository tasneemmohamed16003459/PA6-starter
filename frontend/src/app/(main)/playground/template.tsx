"use client";
import { useState } from "react";

export default function PlaygroundTemplate({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  return (
    <div className="p-4 border border-green-500 space-y-4 mt-4">
      <p className="font-bold text-green-600">Template Counter: {count}</p>
      <button onClick={() => setCount(count + 1)} className="px-3 py-1 bg-green-600 text-white rounded">Increment Template</button>
      <div>{children}</div>
    </div>
  );
}