"use client";

export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="p-6 bg-red-50 border border-red-200 rounded space-y-4 max-w-md">
      <h2 className="text-red-700 font-bold">Failed to load todos!</h2>
      <p className="text-sm text-red-600">{error.message}</p>
      <button onClick={() => reset()} className="px-4 py-2 bg-red-600 text-white rounded">
        Try again
      </button>
    </div>
  );
}