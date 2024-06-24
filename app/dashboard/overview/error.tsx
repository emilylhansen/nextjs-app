"use client"; // Error components must be Client Components

const Error = ({ error, reset }: { error: Error; reset: () => void }) => (
  <div>
    error: {error.message}
    <button onClick={reset} className="border-solid border-2 border-indigo-600">
      retry
    </button>
  </div>
);

export default Error;
