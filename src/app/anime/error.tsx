"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main
      className="w-[100vw] sm:w-[34rem] md:w-[45rem] lg:w-[60rem]
      xl:w-[75rem] h-[100%] mx-auto pb-12 bg-shadowLightBlue
    text-shadowDarkBlue flex flex-col xl:flex-row flex-wrap 
    dark:bg-veryDarkBlue -mb-14 dark:text-gray-200 text-center "
    >
      <h2 className="mt-12 text-3xl font-semibold"> Too many attempts</h2>
      <button onClick={() => reset()}>Try again</button>
    </main>
  );
}
