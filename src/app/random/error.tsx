"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
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
      <button
        className="text-lighterBlue transition duration-300 
      hover:brightness-150"
        onClick={() => window.location.reload()}
      >
        Try again
      </button>
    </main>
  );
}
