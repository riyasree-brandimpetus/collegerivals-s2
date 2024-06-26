'use client'; // Error components must be Client Components

import { useEffect, useState } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
    setErrorMsg(errorMsg);
  }, [error]);
  const [errorMsg, setErrorMsg] = useState<any>();

  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>errorMsg</p>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
