import Link from "next/link";

export default function Navbar() {
	return (
		<header className="w-full h-16 bg-darkBlue text-shadowLightBlue">
			<nav className="xl:w-[75rem] h-full mx-auto flex items-center">
				<Link href="/" className="text-2xl font-bold">
					AnimeSun
				</Link>
				<ul className="flex gap-5 ml-32 font-medium text-lg">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/">List</Link>
					</li>
					<li>
						<Link href="/">Random</Link>
					</li>
				</ul>
				<input
					type="text"
					placeholder="Search anime..."
					className="ml-auto"
				/>
			</nav>
		</header>
	);
}
