import Link from "next/link";
import DarkModeButton from "./darkMode";
import Links from "./links";
import SearchBar from "./searchBar/searchBar";

export default function Navbar() {
  return (
    <header
      id="top"
      className="w-full lg:h-16 bg-darkBlue dark:bg-darkBlueDark
		 text-shadowLightBlue py-2 lg:py-0"
    >
      <nav
        className="w-full sm:w-[34rem] md:w-[45rem] lg:w-[60rem] xl:w-[75rem] 
				h-full mx-auto px-4 flex flex-col
			lg:flex-row items-center gap-3 lg:gap-0"
      >
        <Link href="/" className="text-2xl font-bold">
          AnimeSun
        </Link>
        <Links />
        <div className="flex items-center lg:ml-auto gap-4 mt-1 w-full lg:w-auto">
          <DarkModeButton />
          <SearchBar />
        </div>
      </nav>
    </header>
  );
}
