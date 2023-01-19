import Link from "next/link";
import Links from "./links";
import SearchBar from "./searchBar/searchBar";

export default function Navbar() {
	return (
		<header className="w-full h-16 bg-darkBlue text-shadowLightBlue">
			<nav className="xl:w-[75rem] h-full mx-auto px-4 flex items-center">
				<Link href="/" className="text-2xl font-bold">
					AnimeSun
				</Link>
				<Links />
				<SearchBar />
			</nav>
		</header>
	);
}
