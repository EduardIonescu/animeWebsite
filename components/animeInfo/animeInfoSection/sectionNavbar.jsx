export default function SectionNavbar() {
	return (
		<nav
			className="flex gap-4 text-[14px] text-lighterBlue transition duration-300 
    hover:opacity-80 w-full border-b-[1px] border-black/20"
		>
			<button type="button">Details</button>
			<button type="button">Characters & Staff</button>
			<button type="button">Reviews</button>
			<button type="button">Recommendations</button>
		</nav>
	);
}
