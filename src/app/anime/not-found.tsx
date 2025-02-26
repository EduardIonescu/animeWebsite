import Link from "next/link";

export default function NotFound(params: any) {
  console.log(params);
  return (
    <main
      className="w-[100vw] sm:w-[34rem] md:w-[45rem] lg:w-[60rem]
				xl:w-[75rem] h-[100%] mx-auto pb-12 bg-shadowLightBlue
			text-shadowDarkBlue flex flex-col xl:flex-row flex-wrap 
			dark:bg-veryDarkBlue -mb-14 dark:text-gray-200 text-center"
    >
      <h2 className="mt-12 text-3xl font-semibold">Not Found</h2>
      <p className="my-2 text-xl">Could not find requested resource</p>
      <Link
        href="/"
        className="text-lighterBlue transition duration-300 
      hover:brightness-150"
      >
        Return Home
      </Link>
    </main>
  );
}
